import React from 'react';
import { ButtonsGroup, Header, Input, TasksList } from './components';
import { TaskProvider } from './context';
import block from 'bem-clsx'
import './App.scss'

const a = block('container')

const App: React.FC = () => {
  return (
    <TaskProvider>
      <Header/>
      <div className={a()}>
        <Input/>
        <TasksList/>
        <ButtonsGroup/>
      </div>
    </TaskProvider>
  )
}

export default App;
