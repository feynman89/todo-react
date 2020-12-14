import React from 'react'
import { Header, Input, TasksList, ButtonsGroup } from './components'
import block from 'bem-clsx'
import './styles.scss'

const t = block('todos')

const Todos: React.FC = () => {
  return (
    <>
      <Header/>
      <div className={t()}>
        <Input/>
        <TasksList/>
        <ButtonsGroup/>
      </div>
    </>
  )
}

export default Todos