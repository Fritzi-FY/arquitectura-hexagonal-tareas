const Tarea = require('../entidades/Tarea');

/**
 * Caso de uso: CrearTarea
 * Se encarga de la creación de nuevas tareas dentro del dominio.
 * Recibe un repositorio que implementa el puerto RepositorioTareas.
 */
class CrearTarea {
  constructor(repositorio) {
    this.repositorio = repositorio;
  }

  ejecutar(titulo) {
    const nueva = new Tarea(Date.now(), titulo);
    this.repositorio.guardar(nueva);
    return nueva;
  }
}

module.exports = CrearTarea;
