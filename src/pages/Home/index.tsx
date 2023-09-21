import { Header } from '../../components/Header'
import { TaskList } from '../../components/TaskList'
import * as S from './styles'

export const Home = () => {
  return (
    <S.HomeContainer>
      <Header />
      <TaskList />
    </S.HomeContainer>
  )
}