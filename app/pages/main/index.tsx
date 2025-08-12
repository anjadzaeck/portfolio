import { Title, Container, Section } from './styled'
import PageFlipper from 'components/flipbook'
import About from './about'

const Main = () => {
  return (
    <Container>
      <Section id={'about'}>
        <Title>ÜBER MICH</Title>
        <About />
      </Section>
      <Section id={'portfolio'}>
        <Title>PORTFOLIO</Title>
        <PageFlipper />
      </Section>
      <Section id={'contact'}>
        <Title>KONTAKT</Title>
      </Section>
    </Container>
  )
}

export default Main
