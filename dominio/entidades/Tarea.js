/**
 * Entidad del dominio: Tarea
 * Representa un objeto de negocio con identidad, título y estado.
 * No contiene lógica externa ni depende de frameworks.
 */
class Tarea {
  constructor(id, titulo, estado = "pendiente") {
    this.id = id;
    this.titulo = titulo;
    this.estado = estado;
  }
}

module.exports = Tarea;
