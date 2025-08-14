import {
  Description,
  List,
  Position,
  Date,
  SectionTitle,
  Highlight,
  SubTitle,
  Wrapper,
  Image,
  Section,
  Content,
  Column,
  Entry
} from './styled'

import Profile from 'assets/about.png'
import useResponsiveness from 'hooks/useResponsiveness'

const About = () => {
  const { isMobile } = useResponsiveness()
  return (
    <Wrapper $mobileView={isMobile}>
      <Column>
        <SectionTitle>WERDEGANG</SectionTitle>

        <Content id={'col-content'}>
          <Entry>
            <Date>11 / 2018 – 09 / 2025</Date>
            <Position>
              Architektin bei Peck.Daam Architekten GmbH, München
            </Position>
            <Description>
              Entwurf, Detail- und Ausführungsplanung, Ausschreibung und
              Mitwirken der Vergabe von versch. Projekten im Wohnungs- und
              Gewerbebau, sowie öffentliche Bauten wie Schulen und Kindergärten
            </Description>
          </Entry>
          <Entry>
            <Date>31.01.2023</Date>
            <Position>
              Eintragung als Architektin in die Bayerische Architektenkammer
            </Position>
          </Entry>
          <Entry>
            <Date>10 / 2015 – 08 / 2018</Date>
            <Position>
              Studentische Hilfskraft bei Kussel-Wenski Architekten, Dortmund
            </Position>
            <Description>
              Entwurf- und Genehmigungsplanung, Vorbereiten der
              Genehmigungsunterlagen, Unterstützung bei Ausschreibung und
              Vergabe für hauptsächlich Wohnungsbau (Mehrfamilienhäuser und
              Pflegewohneinheime)
            </Description>
          </Entry>
          <Entry>
            <Date>09 / 2013 – 08 / 2018</Date>
            <Position>
              Studium der Architektur an der Fachhochschule Dortmund
            </Position>
            <Description>Abschluss: Bachelor of Arts</Description>
          </Entry>

          <Entry>
            <Date>10 / 2016 – 02 / 2017</Date>
            <Position>
              Praktikantin bei ZVA Group, Heroica Puebla de Zaragoza, Mexico
            </Position>
            <Description>
              Abteilung Innenarchitektur: Entwurf, Detail- und
              Ausführungsplanung, Erstellen von Material- und Farbkonzepten von
              versch. Projekten im Hotel- und Büroausbau
            </Description>
          </Entry>
          <Entry>
            <Date>05 / 2013</Date>
            <Position>Abitur am Gymnasium Altlünen, Lünen</Position>
          </Entry>
          <Entry>
            <Date>07.11.1994</Date>
            <Position>Geboren in Lünen, Nordrhein-Westfalen</Position>
          </Entry>
        </Content>
      </Column>

      <Column>
        <Image src={Profile} alt={'anja-dzaeck'} />
        <SubTitle>Fähigkeiten</SubTitle>
        <List>
          <Section>
            <Highlight>CAD</Highlight>
            <div>
              <li>· Vectorworks</li>
              <li>· ArchiCAD</li>
              <li>· AutoCAD</li>
            </div>
          </Section>
          <Section>
            <Highlight>Rendering</Highlight>
            <div>
              <li>· Lumion</li>
            </div>
          </Section>
          <Section>
            <Highlight>AVA</Highlight>
            <div>
              <li>· Bechmann</li>
            </div>
          </Section>
          <Section>
            <Highlight>Sonstiges</Highlight>
            <div>
              <li>· Adobe Photoshop</li>
              <li>· Microsoft Office</li>
            </div>
          </Section>
        </List>

        <SubTitle>Sprachkenntnisse</SubTitle>
        <List>
          <Section>
            <Highlight>Muttersprache</Highlight>
            <div>
              <li>· Deutsch</li>
            </div>
          </Section>
          <Section>
            <Highlight>Fließend</Highlight>
            <div>
              <li>· Englisch</li>
            </div>
          </Section>
          <Section>
            <Highlight>Gute Kenntnisse</Highlight>
            <div>
              <li>· Spanisch</li>
            </div>
          </Section>
        </List>

        <SubTitle>Freizeit</SubTitle>
        <Description>
          In meiner Freizeit probiere ich mich gern in versch. Handarbeit aus
          (DIY-Projekte, Häkeln, Töpfern), interessiere mich für
          Inneneinrichtung, Star Wars und Städtetrips mit Freund*innen.
        </Description>
      </Column>
    </Wrapper>
  )
}

export default About
