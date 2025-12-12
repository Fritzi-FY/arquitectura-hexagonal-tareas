const RepositorioTareas = require('../../dominio/puertos/RepositorioTareas');
const { Pool } = require('pg');

class RepoPostgres extends RepositorioTareas {

  constructor() {
    super();
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'tareasdb',
      password: 'admin1234',
      port: 5432
    });
  }

  async guardar(tarea) {
    await this.pool.query(
      'INSERT INTO tareas (id, titulo, estado) VALUES ($1, $2, $3)',
      [tarea.id, tarea.titulo, tarea.estado]
    );
  }

  async listar() {
    const result = await this.pool.query('SELECT * FROM tareas ORDER BY id DESC');
    return result.rows;
  }

  async buscarPorId(id) {
    const result = await this.pool.query(
      'SELECT * FROM tareas WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }

  async actualizar(tarea) {
    await this.pool.query(
      'UPDATE tareas SET titulo = $1, estado = $2 WHERE id = $3',
      [tarea.titulo, tarea.estado, tarea.id]
    );
  }

  async eliminar(id) {
    await this.pool.query(
      'DELETE FROM tareas WHERE id = $1',
      [id]
    );
  }
}

module.exports = RepoPostgres;
