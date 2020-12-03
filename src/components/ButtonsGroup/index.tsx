import React from 'react'
import { DisplayState } from '../../enums'
import { useTasks } from '../../hooks'

const ButtonsGroup: React.FC = () => {
  const { activeTasks, completedTasks, removeComplited, changeDisplayState } = useTasks()
  return (
    <>
      <span>{ activeTasks.length } items left</span>
      <button onClick={() => changeDisplayState(DisplayState.All)}>All</button>
      <button onClick={() => changeDisplayState(DisplayState.Active)}>Active</button>
      <button onClick={() => changeDisplayState(DisplayState.Completed)}>Completed</button>
      <button onClick={removeComplited}>Clear completed</button>
    </>
  )
}

export default ButtonsGroup
