/**
 * Caso de uso: ListarTareas
 * Recupera todas las tareas desde el repositorio.
 */
class ListarTareas {
  constructor(repositorio) {
    this.repositorio = repositorio;
  }

  async ejecutar() {
    return await this.repositorio.listar();
  }
}

module.exports = ListarTareas;
