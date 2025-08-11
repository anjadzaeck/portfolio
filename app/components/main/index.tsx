import { Title, PageWrapper, Container } from './styled'
import PageFlipper from 'components/flipbook'

const Main = () => {
  return (
    <Container>
      <Title>Portfolio</Title>

      <PageWrapper id={'page-holder'}>
        <PageFlipper />
      </PageWrapper>
    </Container>
  )
}

export default Main
