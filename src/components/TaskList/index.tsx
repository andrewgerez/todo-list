import { TaskItem } from '../TaskItem';
import * as S from './styles';

export const TaskList = () => {
  return (
    <S.TaskListContainer>
      <S.TaskListHeader>
        <div>
          <S.TaskCounter variant='created'>Tarefas criadas</S.TaskCounter>
          <span>5</span>
        </div>

        <div>
          <S.TaskCounter variant='done'>Concluídas</S.TaskCounter>
          <span>2 de 5</span>
        </div>
      </S.TaskListHeader>

      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </S.TaskListContainer>
  );
}