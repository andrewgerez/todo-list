import * as S from './styles';

interface IInput {
  type: string;
  placeholder: string;
}

export const Input = ({ type, placeholder }: IInput) => {
  return <S.Input type={type} placeholder={placeholder} />
}