import React from 'react';
import { Todos } from './screens'
import { TaskProvider } from './context';
import block from 'bem-cn'
import './App.scss'

const a = block('container')

const App: React.FC = () => {
  return (
    <TaskProvider>
      <Todos/>
    </TaskProvider>
  )
}

export default App;
