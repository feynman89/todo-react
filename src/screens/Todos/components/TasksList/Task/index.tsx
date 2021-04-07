import React, { useEffect, useRef, useState } from 'react'
import block from 'bem-cn'
import { useTasks } from 'hooks'
import { IconButton, ListItem, Checkbox } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import './styles.scss'

interface IProps {
  task: ITask,
}

const tlt = block('tasks-list-task')

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
    <ListItem className={tlt()}>
      <Checkbox
        checked={task.completed}
        onChange={() => toggle(task.id)}
      />
      <label className={tlt('label', {hide: editState })} onDoubleClick={doubleClickHandler}>{ task.title }</label>
      <input
        className={tlt('input', { hide: !editState })}
        type='edit'
        ref={inputRef}
        onBlur={lostFocusHandler}
        value={title}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <IconButton onClick={() => remove(task.id)}>
        <DeleteIcon fontSize='small' />
      </IconButton>
    </ListItem>
  )
}

export default Task
