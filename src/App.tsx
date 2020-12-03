import React from 'react';
import { ButtonsGroup, Header, Input, TasksList } from './components';
import { TaskProvider } from './context';

const App: React.FC = () => {
  return (
    <TaskProvider>
      <Header/>
      <Input/>
      <TasksList/>
      <ButtonsGroup/>
    </TaskProvider>
  )
}

export default App;
