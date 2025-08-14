import { Highlight, SubTitle, Wrapper } from './styled'

const Contact = () => {
  return (
    <Wrapper>
      <div>
        <Highlight>NAME</Highlight>
        <SubTitle>Anja Dzaeck</SubTitle>
      </div>
      <div>
        <Highlight>ADRESSE</Highlight>
        <SubTitle>Herrfurthstaße 6A, 12049, Berlin</SubTitle>
      </div>
      <div>
        <Highlight>TELEFON</Highlight>
        <SubTitle>0176 20537326</SubTitle>
      </div>
      <div>
        <Highlight>MAIL</Highlight>
        <SubTitle>anja.dzaeck@outlook.de</SubTitle>
      </div>
    </Wrapper>
  )
}

export default Contact
