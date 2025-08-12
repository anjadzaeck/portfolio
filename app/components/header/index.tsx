import {
  Container,
  NameWrapper,
  Navigation,
  NavItem,
  SubTitle,
  Title
} from './styled'
import useResponsiveness from 'hooks/useResponsiveness'

const Header = () => {
  const { isMobile } = useResponsiveness()

  return (
    <Container id={'header'} $mobileView={isMobile}>
      <NameWrapper>
        <Title>ANJA DZAECK</Title>
        <SubTitle>ARCHITEKTUR</SubTitle>
      </NameWrapper>
      <Navigation id={'navigation'}>
        <NavItem href={'#about'} $active={true}>
          ÜBER MICH
        </NavItem>
        <NavItem href={'#portfolio'}>PORTFOLIO</NavItem>
        <NavItem href={'#contact'}>KONTAKT</NavItem>
      </Navigation>
    </Container>
  )
}

export default Header
