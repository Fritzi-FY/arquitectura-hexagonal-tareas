/**
 * Adaptador de entrada: Servidor Express
 * Recibe los casos de uso desde el ensamblador
 * y expone un API HTTP.
 */

module.exports = function crearServidor({ crearTarea, listarTareas, completarTarea }) {
  const express = require('express');
  const app = express();
  app.use(express.json());

  // Crear tarea
  app.post('/tareas', (req, res) => {
    const { titulo } = req.body;
    const tarea = crearTarea.ejecutar(titulo);
    res.status(201).json(tarea);
  });

  // Listar tareas
  app.get('/tareas', async (req, res) => {
    const tareas = await listarTareas.ejecutar();
    res.json(tareas);
  });

  // Completar tarea
  app.patch('/tareas/:id/completar', (req, res) => {
    try {
      const tarea = completarTarea.ejecutar(req.params.id);
      res.json(tarea);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  });

  // Eliminar tarea
  app.delete('/tareas/:id', async (req, res) => {
    try {
      const respuesta = await eliminarTarea.ejecutar(req.params.id);
      res.json(respuesta);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  });


  return app;
};
