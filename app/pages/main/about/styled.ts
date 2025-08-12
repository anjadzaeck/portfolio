import styled from 'styled-components'
import { Color, Opacity } from 'styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  width: 100%;
`

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  position: relative;
  background: #fff;
  font-family: Arial, sans-serif;
`

export const LeftColumn = styled.div`
  width: 50%;
`

export const RightColumn = styled.div`
  width: 50%;
  padding-left: 2rem;
`

export const Image = styled.img`
  max-width: 50rem;
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`

export const SectionTitle = styled.h2`
  font-size: 1.4rem;
  letter-spacing: 2px;
  margin-top: 0;
  margin-bottom: 1rem;
`

export const Entry = styled.div`
  margin-bottom: 1.5rem;
`

export const Date = styled.div`
  color: rgb(${Color.text.accent} / ${Opacity.full});
  font-weight: lighter;
  margin-bottom: 0.2rem;
`

export const Position = styled.div`
  font-weight: bold;
`

export const Description = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.4;
`

export const SubTitle = styled.h3`
  font-size: 1.1rem;
  margin-top: 1.5rem;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.95rem;

  li {
    margin-bottom: 0.3rem;
  }
`

export const Highlight = styled.span`
  color: #e16e3a;
  font-weight: bold;
`
