import {
  Container,
  NameWrapper,
  Navigation,
  NavItem,
  SubTitle,
  Title
} from './styled'

const Header = () => {
  return (
    <Container id={'header'}>
      <NameWrapper>
        <Title>ANJA DZAECK</Title>
        <SubTitle>ARCHITECT</SubTitle>
      </NameWrapper>
      <Navigation id={'navigation'}>
        <NavItem $active={true}>About</NavItem>
        <NavItem>Portfolio</NavItem>
        <NavItem>Contact</NavItem>
      </Navigation>
    </Container>
  )
}

export default Header
