import { Container } from './styled'
import Spinner from 'components/spinner'

const Loading = () => {
  return (
    <Container>
      <h2>Loading PDF...</h2>
      <Spinner />
    </Container>
  )
}

export default Loading
