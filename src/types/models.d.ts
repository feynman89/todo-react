declare interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

declare type IDisplay =  'All' | 'Active' | 'Completed'
