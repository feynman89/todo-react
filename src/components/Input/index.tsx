import React, { useState } from 'react'
import { useTasks } from '../../hooks'
import { Checkbox, TextField } from '@material-ui/core'
import block from 'bem-clsx'
import './styles.scss'

const Input: React.FC = () => {
  const {tasks, completedTasks, add, allCompleted } = useTasks()
  const [title, setTitle] = useState<string>('')

  const i = block('input')

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => (setTitle(event.target.value))

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && title.length > 0) {
      add(title)
      setTitle('')
    }
  }

  return (
    <div className={i()}>
      <Checkbox
        className={i('checkbox')}
        onChange={allCompleted}
        checked={tasks.length > 0 && completedTasks.length === tasks.length}
      />
      <TextField
        className={i('text-field')}
        variant='outlined'
        size='small'
        value={title}
        placeholder='What needs to be done?'
        onKeyPress={keyPressHandler}
        onChange={changeHandler}
      />
    </div>
  )
}

export default Input
