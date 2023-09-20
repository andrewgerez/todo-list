import { Header } from '../../components/Header'
import { NewTask } from '../../components/NewTask'
import { TaskList } from '../../components/TaskList'
import * as S from './styles'

export const Home = () => {
  return (
    <S.HomeContainer>
      <Header />
      <NewTask />

      <TaskList />
    </S.HomeContainer>
  )
}