import React, { useState, useEffect } from 'react'

interface ITasksContextValue {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  displayState: IDisplay;
  setDisplayState: React.Dispatch<React.SetStateAction<IDisplay>>;
}

export const TaskContext = React.createContext<ITasksContextValue>({ 
  tasks: [],
  setTasks: () => {},
  displayState: 'All',
  setDisplayState: () => {},
 })

 const TaskProvider: React.FC = ({ children }) => {
   const [tasks, setTasks] = useState<ITask[]>([])
   const [displayState, setDisplayState] = useState<IDisplay>('All')

   useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as ITask[]
    setTasks(savedTasks)

    const savedDisplayState = JSON.parse(localStorage.getItem('displayState') || '0') as IDisplay
    setDisplayState(savedDisplayState)
   }, [])
   
   useEffect(() => { localStorage.setItem('tasks', JSON.stringify(tasks)) }, [tasks])

   useEffect(() => { localStorage.setItem('displayState', JSON.stringify(displayState)) }, [displayState])

   const value = {
     tasks,
     setTasks,
     displayState,
     setDisplayState,
   }

   return (
     <TaskContext.Provider value={value}>
       {children}
     </TaskContext.Provider>
   )
 }

export default TaskProvider
