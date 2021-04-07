import React from 'react'
import { useTasks } from 'hooks'
import Task from './Task'
import block from 'bem-cn'
import './styles.scss'
import { List } from '@material-ui/core'

const tl = block('tasks-list')

const TasksList: React.FC = () => {
  const { displayTasks } = useTasks()

  return (
    <div className={tl()}>
      <List className={tl('list')}>
        { displayTasks.map(task => <Task key={task.id} task={task}/>) }
      </List>
    </div>
  )
}

export default TasksList
