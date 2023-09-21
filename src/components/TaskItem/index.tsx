import * as S from './styles';
import { Trash } from 'phosphor-react'
import { useState } from 'react';

interface ITaskItem {
  content: string;
}
export const TaskItem = ({ content }: ITaskItem) => {
  const [ taskCompleted, setTaskCompleted ] = useState<boolean>(false);

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