import * as S from './styles';

interface IButton {
  children: React.ReactNode;
}

export const Button = ({children}: IButton) => {
  return <S.Button>{children}</S.Button>
}