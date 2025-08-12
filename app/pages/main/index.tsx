import { Title, Container, Section } from './styled'
import PageFlipper from 'components/flipbook'
import About from './about'

const Main = () => {
  return (
    <Container>
      <Section id={'about'}>
        <Title>About</Title>
        <About />
      </Section>
      <Section id={'portfolio'}>
        <Title>Portfolio</Title>
        <PageFlipper />
      </Section>
      <Section id={'contact'}>
        <Title>Contact</Title>
      </Section>
    </Container>
  )
}

export default Main
