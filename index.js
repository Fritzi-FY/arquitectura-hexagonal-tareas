/**
 * Archivo de ensamblaje de la Arquitectura Hexagonal
 * 
 * Aquí se conectan:
 * - Adaptadores de salida (persistencia)
 * - Casos de uso (aplicación)
 * - Adaptadores de entrada (API REST)
 */

const RepoMemoria = require('./adaptadores/salida/RepoMemoria');
const RepoPostgres = require('./adaptadores/salida/RepoPostgres'); // nuevo


const CrearTarea = require('./dominio/casos-de-uso/CrearTarea');
const ListarTareas = require('./dominio/casos-de-uso/ListarTareas');
const CompletarTarea = require('./dominio/casos-de-uso/CompletarTarea');
const EliminarTarea = require('./dominio/casos-de-uso/EliminarTarea'); // nuevo


const crearServidor = require('./adaptadores/entrada/web/app');

// 1. Instanciar repositorio
//const repo = new RepoPostgres();
const repo = new RepoMemoria();

// 2. Instanciar casos de uso con el puerto implementado
const crearTarea = new CrearTarea(repo);
const listarTareas = new ListarTareas(repo);
const completarTarea = new CompletarTarea(repo);
const eliminarTarea = new EliminarTarea(repo); // nuevo

// 3. Crear servidor inyectando casos de uso
const app = crearServidor({ crearTarea, listarTareas, completarTarea, eliminarTarea }); // nuevo

// 4. Iniciar servicio HTTP
app.listen(3001, () => {
  console.log("Servidor ejecutándose en http://localhost:3001");
});
