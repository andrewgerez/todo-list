import { Button } from '../Button';
import { Input } from '../Input';
import * as S from './styles';
import { PlusCircle } from 'phosphor-react'

export const NewTask = () => {
  return (
    <S.NewTaskContainer>
      <Input type="text" placeholder="Adicione uma nova tarefa" />
      <Button>
        Criar
        <PlusCircle width={16} height={16} />
      </Button>
    </S.NewTaskContainer>
  );
}