import React, { useState } from 'react'
import { useTasks } from '../../hooks'

const Input: React.FC = () => {
  const {tasks, completedTasks, add, allCompleted } = useTasks()
  const [title, setTitle] = useState<string>('')

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => (setTitle(event.target.value))

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && title.length > 0) {
      add(title)
      setTitle('')
    }
  }

  return (
    <>
      <input 
        type='checkbox'
        onChange={allCompleted}
        checked={tasks.length > 0 && completedTasks.length === tasks.length}
      />
      <input
        type='text'
        value={title}
        placeholder='What needs to be done?'
        onKeyPress={keyPressHandler}
      />
    </>
  )
}

export default Input
