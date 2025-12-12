/**
 * Caso de uso: EliminarTarea
 * Elimina una tarea identificada por su id.
 */
class EliminarTarea {
  constructor(repositorio) {
    this.repositorio = repositorio;
  }

  ejecutar(id) {
    const idNum = Number(id);
    const tarea = this.repositorio.buscarPorId(idNum);

    if (!tarea) {
      throw new Error("Tarea no encontrada");
    }

    this.repositorio.eliminar(idNum);
    return { mensaje: "Tarea eliminada correctamente" };
  }
}

module.exports = EliminarTarea;
