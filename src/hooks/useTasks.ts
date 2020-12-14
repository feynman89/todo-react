import { TaskContext } from './../context/TaskContext/index';
import { useCallback, useMemo, useContext } from 'react'

const useTasks = () => {
  const { tasks, setTasks, displayState, setDisplayState } = useContext(TaskContext)
  const activeTasks = useMemo<ITask[]>(() => (tasks.filter(task => !task.completed)), [tasks])
  const completedTasks = useMemo<ITask[]>(() => (tasks.filter(task => task.completed)), [tasks])
  const displayTasks = useMemo<ITask[]>(() => {
    switch(displayState) {
      case 'Active':
        return activeTasks
      case 'Completed':
        return completedTasks
      default:
        return tasks
    }
  }, [tasks, activeTasks, completedTasks, displayState])

  const add = useCallback((title: string) => 
    setTasks(prev => prev.concat({
      id: Date.now(),
      title: title,
      completed: false,
    })), [])

  const toggle = useCallback((id: number) => 
    (setTasks(prev => prev.map(task => (task.id === id ? { ...task, completed: !task.completed } : task))))
  , [])

  const remove = useCallback((id: number) => (setTasks(prev => prev.filter(task => task.id !== id))), [])

  const removeComplited = useCallback(() => (setTasks(prev => prev.filter(task => !task.completed))), [])

  const edit = useCallback((id: number, title: string) => 
    (setTasks(prev => prev.map(task => task.id === id ? { ...task, title: title} : task))), [])
  
  const allCompleted = useCallback(() => setTasks(prev => 
    prev.map(task => completedTasks.length === tasks.length ? { ...task, completed: !task.completed } : 
      { ...task, completed: true })), [completedTasks, tasks])
  
  const changeDisplayState = useCallback((displayState: IDisplay) => (setDisplayState(displayState)), [])

  return {
    tasks,
    activeTasks,
    completedTasks,
    displayTasks,
    displayState,
    add,
    toggle,
    remove,
    removeComplited,
    edit,
    allCompleted,
    changeDisplayState,
  }
}

export default useTasks