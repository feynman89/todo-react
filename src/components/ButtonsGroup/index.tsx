import React from 'react'
import { useTasks } from '../../hooks'
import block from 'bem-clsx'
import './styles.scss'

const bg = block('buttons-group')

const ButtonsGroup: React.FC = () => {
  const { activeTasks, completedTasks, displayState, removeComplited, changeDisplayState } = useTasks()
  return (
    <div className={bg()}>
      <span className={bg('span')}>{ activeTasks.length } items left</span>
      <div className={bg('buttons-group')}>
        <button className={bg('button', {active: displayState === 'All'})} onClick={() => changeDisplayState('All')}>All</button>
        <button className={bg('button', {active: displayState === 'Active'})} onClick={() => changeDisplayState('Active')}>Active</button>
        <button className={bg('button', {active: displayState === 'Completed'})} onClick={() => changeDisplayState('Completed')}>Completed</button>
        <button className={bg('button', { hide: completedTasks.length === 0})} onClick={removeComplited}>Clear completed</button>
      </div>

    </div>
  )
}

export default ButtonsGroup
