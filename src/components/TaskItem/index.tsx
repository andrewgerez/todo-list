import * as S from './styles';
import { Trash } from 'phosphor-react'
import { useState } from 'react';

export const TaskItem = () => {
  const [ taskCompleted, setTaskCompleted ] = useState<boolean>(false);

  return (
    <S.TaskItemContainer>
      <S.CheckboxTask onCheckedChange={(checked: boolean) => setTaskCompleted(checked)} />
      <S.TaskContent completed={taskCompleted.toString()}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis omnis dolorem eligendi commodi quae
      </S.TaskContent>

      <S.DeleteButton>
        <Trash width={14} height={14} />
      </S.DeleteButton>
    </S.TaskItemContainer>
  );
}