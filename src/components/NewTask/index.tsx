import * as S from './styles';
import { PlusCircle } from 'phosphor-react'

export const NewTask = () => {
  return (
    <S.NewTaskContainer>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle width={16} height={16} />
      </button>
    </S.NewTaskContainer>
  )
}