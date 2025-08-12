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
        <SubTitle>ARCHITEKTUR</SubTitle>
      </NameWrapper>
      <Navigation id={'navigation'}>
        <NavItem href={'#about'} $active={true}>
          About
        </NavItem>
        <NavItem href={'#portfolio'}>Portfolio</NavItem>
        <NavItem href={'#contact'}>Contact</NavItem>
      </Navigation>
    </Container>
  )
}

export default Header
