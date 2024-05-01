import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';
import './TaskManager.css';

function taskReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return [];
    default:
      return state;
  }
}

function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [task, setTask] = React.useState('');

  const handleAdd = () => {
    if (task) {
      dispatch({ type: 'add', payload: task });
      setTask('');
    }
  };

  return (
    <div>
      <input type="text" value={task} onChange={e => setTask(e.target.value)} placeholder="Add a task" />
      <Button onClick={handleAdd}>Add Task</Button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
      <Button onClick={() => dispatch({ type: 'delete' })}>Clear Tasks</Button>
    </div>
  );
}

export default TaskManager;
