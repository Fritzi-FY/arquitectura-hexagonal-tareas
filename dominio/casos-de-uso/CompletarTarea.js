/**
 * Caso de uso: CompletarTarea
 * Cambia el estado de una tarea a "completada".
 */
class CompletarTarea {
  constructor(repositorio) {
    this.repositorio = repositorio;
  }

  ejecutar(id) {
    const idNum = Number(id);
    const tarea = this.repositorio.buscarPorId(idNum);

    if (!tarea) {
      throw new Error("Tarea no encontrada");
    }

    tarea.estado = "completada";
    this.repositorio.actualizar(tarea);

    return tarea;
  }
}

module.exports = CompletarTarea;
