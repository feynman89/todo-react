import React from 'react'
import { useTasks } from 'hooks'
import block from 'bem-cn'
import Button from './components/Button'
import './styles.scss'

const bg = block('buttons-group')

const ButtonsGroup: React.FC = () => {
  const { activeTasks, completedTasks, displayState, removeComplited, changeDisplayState } = useTasks()
  return (
    <div className={bg()}>
      <span className={bg('counter')}>{ activeTasks.length } items left</span>
      <Button
        active={displayState === 'All'}
        onClick={() => changeDisplayState('All')}
      >
        All
      </Button>
      <Button
        active={displayState === 'Active'}
        onClick={() => changeDisplayState('Active')}
      >
        Active
      </Button>
      <Button
        active={displayState === 'Completed'}
        onClick={() => changeDisplayState('Completed')}
      >
        Completed
      </Button>
      <Button
        visible={completedTasks.length !== 0}
        onClick={removeComplited}
      >
        Clear completed
      </Button>
    </div>
  )
}

export default ButtonsGroup
