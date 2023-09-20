import * as S from './styles';
import Logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <img src={Logo} alt="" />
    </S.HeaderContainer>
  );
}