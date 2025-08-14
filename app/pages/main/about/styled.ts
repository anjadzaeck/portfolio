import styled, { css } from 'styled-components'
import { Color, Opacity } from 'styles'

export const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
`

export const Wrapper = styled.div<{ $mobileView: boolean }>`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 4rem;
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;

  ${({ $mobileView }) =>
    $mobileView &&
    css`
      flex-direction: column;

      & > div {
        width: 100%;
      }
    `}
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`

export const SectionTitle = styled.h2`
  font-size: 1.4rem;
  letter-spacing: 2px;
  margin: 0;
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`

export const Entry = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  margin: 0;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
  height: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  li {
    width: fit-content;
    text-wrap: nowrap;
  }
`

export const Highlight = styled.span`
  color: rgb(${Color.text.accent} / ${Opacity.full});
  font-weight: normal;
  width: 30%;
  text-align: right;
`

export const Section = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  gap: 2.5rem;

  li {
    text-align: left;
  }
`
