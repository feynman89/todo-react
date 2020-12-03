import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useTasks } from '../../../hooks'

interface IProps {
  task: ITask,
}

const Task: React.FC<IProps> = ({ task }) => {
  const { toggle, remove, edit } = useTasks()
  const [title, setTitle] = useState<string>(task.title)
  const [editState, setEditState] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { if (editState) inputRef.current?.focus() }, [editState])

  const doubleClickHandler = () => (setEditState(prev => !prev))

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => (setTitle(event.target.value))

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && title.length > 0) {
      edit(task.id, title)
      setTitle(title)
      setEditState(prev => !prev)
    }
  }

  const lostFocusHandler = () => {
    setTitle(task.title)
    setEditState(false)
  }

  return (
    <li>
      <input 
        type='checkbox'
        checked={task.completed}
        onChange={() => toggle(task.id)}
      />
      <label onDoubleClick={doubleClickHandler}>{ task.title }</label>
      <input
        type='edit'
        ref={inputRef}
        onBlur={lostFocusHandler}
        value={title}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <button onClick={() => remove(task.id)}></button>
    </li>
  )
}

export default Task
