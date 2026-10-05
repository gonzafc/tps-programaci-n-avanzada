import { useState } from 'react';

export default function TaskForm({ onTaskAdded }) {
  const [formData, setFormData] = useState({
    project_name: '', activity_type: '', status: 'Pendiente', summary: '',
    description: '', priority: '', reporter: '', assignee: '', precondition: '',
    creation_date: '', closing_date: '', sprint: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <input name="project_name" placeholder="Nombre del Proyecto" onChange={handleChange} required />
      <input name="activity_type" placeholder="Tipo de Actividad" onChange={handleChange} required />
      <input name="summary" placeholder="Resumen" onChange={handleChange} required />
      <select name="priority" onChange={handleChange}>
        <option value="">Prioridad...</option>
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
      </select>
      <input name="reporter" placeholder="Informador" onChange={handleChange} required />
      <input name="assignee" placeholder="Persona Asignada" onChange={handleChange} required />
      <textarea name="description" placeholder="Descripción" onChange={handleChange} required />
      <textarea name="precondition" placeholder="Precondición" onChange={handleChange} />
      <div>
        <label>Fecha de Creación</label>
        <input type="date" name="creation_date" onChange={handleChange} required />
      </div>
      <div>
        <label>Fecha de Cierre</label>
        <input type="date" name="closing_date" onChange={handleChange} />
      </div>
      <input name="sprint" placeholder="Sprint" onChange={handleChange} required />
      
      <button type="submit" className="btn-primary" style={{ gridColumn: 'span 2' }}>
        Crear Tarea
      </button>
    </form>
  );
}