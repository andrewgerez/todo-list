import * as S from './styles';
import { Trash } from 'phosphor-react'
import { useState, useEffect } from 'react';
import { useStore } from '../../store';

interface ITaskItem {
  id: string;
  content: string;
}
export const TaskItem = ({ id, content }: ITaskItem) => {
  const { completeTask, resetTask, deleteTask } = useStore();
  const [ taskCompleted, setTaskCompleted ] = useState<boolean>(false);

  useEffect(() => {
    if (taskCompleted) {
      completeTask(id);
    } else {
      resetTask(id);
    }
  }, [completeTask, resetTask, taskCompleted, id]);

  return (
    <S.TaskItemContainer>
      <S.CheckboxTask onCheckedChange={(checked: boolean) => setTaskCompleted(checked)} />
      <S.TaskContent completed={taskCompleted.toString()}>
        {content}
      </S.TaskContent>

      <S.DeleteButton>
        <Trash width={14} height={14} />
      </S.DeleteButton>
    </S.TaskItemContainer>
  );
}