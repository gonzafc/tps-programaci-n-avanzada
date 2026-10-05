export default function TaskList({ tasks, refreshTasks }) {
  const handleFinish = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}/finish`, { method: 'PATCH' });
    refreshTasks();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, { method: 'DELETE' });
    refreshTasks();
  };

  return (
    <div>
      <h2>Listado de Tareas</h2>
      {tasks.map(task => (
        <div key={task.id} className="task-card">
          <h3>{task.project_name} - {task.summary}</h3>
          <p><strong>Estado:</strong> {task.status} | <strong>Prioridad:</strong> {task.priority}</p>
          <p><strong>Asignado a:</strong> {task.assignee} | <strong>Sprint:</strong> {task.sprint}</p>
          <div style={{ marginTop: '10px' }}>
            {task.status !== 'Finalizada' && (
              <button className="btn-success" onClick={() => handleFinish(task.id)}>Finalizar</button>
            )}
            <button className="btn-danger" onClick={() => handleDelete(task.id)}>Eliminar</button>
            {/* La lógica de edición implicaría cargar los datos al formulario mediante un estado compartido */}
            <button className="btn-primary" style={{ marginLeft: '5px' }}>Editar</button>
          </div>
        </div>
      ))}
    </div>
  );
}