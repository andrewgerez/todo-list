import * as S from './styles';
import { Trash } from 'phosphor-react'
import { useStore } from '../../store';
import { Task } from '../../interfaces';

interface ITaskItem {
  task: Task
}
export const TaskItem = ({ task }: ITaskItem) => {
  const { completeTask, resetTask, deleteTask } = useStore();

  return (
    <S.TaskItemContainer>
      <S.CheckboxTask 
        defaultChecked={task.completed}
        onClick={() => task.completed 
          ? resetTask(task.id) 
          : completeTask(task.id)
        }
      />
      <S.TaskContent completed={task.completed.toString()}>
        {task.content}
      </S.TaskContent>

      <S.DeleteButton onClick={() => deleteTask(task.id)}>
        <Trash width={14} height={14} />
      </S.DeleteButton>
    </S.TaskItemContainer>
  );
}
