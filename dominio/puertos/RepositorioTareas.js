/**
 * Puerto del Dominio: RepositorioTareas
 * Define las operaciones que el dominio necesita para persistir tareas.
 * No tiene implementación, solo define un contrato.
 * 
 * Los adaptadores de salida (infraestructura) deberán implementar esta interfaz.
 */
class RepositorioTareas {
  guardar(tarea) { throw new Error("Método no implementado"); }
  listar() { throw new Error("Método no implementado"); }
  buscarPorId(id) { throw new Error("Método no implementado"); }
  actualizar(tarea) { throw new Error("Método no implementado"); }
  eliminar(id) { throw new Error("Método no implementado"); }
}

module.exports = RepositorioTareas;

