CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    project_name VARCHAR(100),
    activity_type VARCHAR(50),
    status VARCHAR(50) DEFAULT 'Pendiente',
    summary VARCHAR(255),
    description TEXT,
    priority VARCHAR(20),
    reporter VARCHAR(100),
    assignee VARCHAR(100),
    precondition TEXT,
    creation_date DATE,
    closing_date DATE,
    sprint VARCHAR(50)
);