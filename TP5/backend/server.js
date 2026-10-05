const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Obtener todas las tareas
app.get('/tasks', async (req, res) => {
  const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
  res.json(result.rows);
});

// Crear una tarea nueva
app.post('/tasks', async (req, res) => {
  const { project_name, activity_type, status, summary, description, priority, reporter, assignee, precondition, creation_date, closing_date, sprint } = req.body;
  const result = await pool.query(
    'INSERT INTO tasks (project_name, activity_type, status, summary, description, priority, reporter, assignee, precondition, creation_date, closing_date, sprint) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
    [project_name, activity_type, status, summary, description, priority, reporter, assignee, precondition, creation_date, closing_date, sprint]
  );
  res.json(result.rows[0]);
});

// Finalizar tarea
app.patch('/tasks/:id/finish', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("UPDATE tasks SET status = 'Finalizada' WHERE id = $1 RETURNING *", [id]);
  res.json(result.rows[0]);
});

// Eliminar tarea
app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
  res.json({ message: 'Tarea eliminada' });
});

app.listen(3000, () => console.log('Backend corriendo en puerto 3000'));