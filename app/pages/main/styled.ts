import styled from 'styled-components'
import { Color, Opacity } from 'styles'

export const Title = styled.h2`
  letter-spacing: 2px;
  margin: 0;
  width: fit-content;
  font-weight: lighter;
  font-size: 2rem;
  border-bottom: 1px solid rgb(${Color.border.accent} / ${Opacity.full});
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  padding: 4rem;
  width: 100%;
`

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
  align-items: center;
  min-height: 30rem;
`
