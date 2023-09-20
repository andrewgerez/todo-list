import { Header } from '../../components/Header'
import { NewTask } from '../../components/NewTask'
import * as S from './styles'

export const Home = () => {
  return (
    <S.HomeContainer>
      <Header />
      <NewTask />
    </S.HomeContainer>
  )
}