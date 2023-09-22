import * as S from './styles';

interface IButton {
  children: React.ReactNode;
  disabled: boolean;
}

export const Button = ({ children, disabled }: IButton) => {
  return <S.Button
    title={disabled ? 'Digite a nova tarefa...' : 'Criar a nova tarefa'}
    disabled={disabled}>
      {children}
  </S.Button>
}