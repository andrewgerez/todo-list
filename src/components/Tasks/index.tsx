import { PlusCircle } from 'phosphor-react';
import { Button } from '../Button';
import { TaskItem } from '../TaskItem';
import * as S from './styles';
import { useState } from 'react';
import { useStore } from '../../store';
export const TaskList = () => {
  const { tasks, addTask } = useStore();
  const [newTask, setNewTask] = useState<string>('');
  const completedTasks = tasks.filter((task) => task.completed === true).length;
  const newTaskIsEmpty = newTask.length === 0;

  const handleCreateNewTask = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    addTask(newTask);
    setNewTask('');
  }

  const handleNewTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity('');
    setNewTask(e.currentTarget.value);
  }

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
          <Button disabled={newTaskIsEmpty}>
            Criar
            <PlusCircle width={16} height={16} />
          </Button>
        </>
      </S.NewTaskForm>

      <S.TaskList>
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

        {tasks?.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            content={task.content}
          />
        ))}
      </S.TaskList>
    </S.TaskListContainer>
  );
}
