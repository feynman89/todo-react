import React from 'react'
import { useTasks } from '../../hooks'
import Task from './Task'

const TasksList: React.FC = () => {
  const { displayTasks } = useTasks()

  return (
    <>
      <ul>
        { displayTasks.map(task => <Task key={task.id} task={task}/>) }
      </ul>
    </>
  )
}

export default TasksList
