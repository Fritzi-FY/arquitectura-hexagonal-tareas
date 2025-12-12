const RepositorioTareas = require('../../dominio/puertos/RepositorioTareas');

/**
 * Adaptador de salida: RepoMemoria
 * Implementa el puerto RepositorioTareas utilizando almacenamiento en memoria.
 * Esta es una tecnología concreta (infraestructura).
 */
class RepoMemoria extends RepositorioTareas {
  constructor() {
    super();
    this.tareas = [];
  }

  guardar(tarea) {
    this.tareas.push(tarea);
  }

  listar() {
    return this.tareas;
  }

  buscarPorId(id) {
    return this.tareas.find(t => t.id === id);
  }

  actualizar(tarea) {
    const index = this.tareas.findIndex(t => t.id === tarea.id);
    if (index !== -1) {
      this.tareas[index] = tarea;
    }
  }
}

module.exports = RepoMemoria;
