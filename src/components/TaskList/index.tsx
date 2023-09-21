import { PlusCircle } from 'phosphor-react';
import { Button } from '../Button';
import { TaskItem } from '../TaskItem';
import * as S from './styles';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

interface Task {
  content: string;
  completed: boolean;
}

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const completedTasks = tasks.filter((task) => task.completed === true).length;

  const handleCreateNewTask = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    setTasks([...tasks, { content: newTask, completed: false }]);
    setNewTask('');
  }

  const handleNewTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity('');
    setNewTask(e.currentTarget.value);
  }

  // const handleCompleteTask = (index: number, completed: boolean) => {
  //   const updateTasks = [...tasks];
  //   updateTasks[index].completed = completed;
  //   setTasks(updateTasks);
  // }

  return (
    <S.TaskListContainer>
      <S.NewTaskForm onSubmit={handleCreateNewTask}>
        <>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleNewTaskChange}
          />
          <Button>
            Criar
            <PlusCircle width={16} height={16} />
          </Button>
        </>
      </S.NewTaskForm>

      <S.TaskListHeader>
        <div>
          <S.TaskCounter variant='created'>Tarefas criadas</S.TaskCounter>
          <span>{tasks.length}</span>
        </div>

        <div>
          <S.TaskCounter variant='done'>Concluídas</S.TaskCounter>
          <span>{completedTasks} de {tasks.length}</span>
        </div>
      </S.TaskListHeader>

      {tasks.map((task) => (
        <TaskItem key={uuid()} content={task.content} />
      ))}
    </S.TaskListContainer>
  );
}