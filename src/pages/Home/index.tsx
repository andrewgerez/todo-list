import { Header } from '../../components/Header'
import { TaskList } from '../../components/Tasks'
import * as S from './styles'

export const Home = () => {
  return (
    <S.HomeContainer>
      <Header />
      <TaskList />
    </S.HomeContainer>
  )
}