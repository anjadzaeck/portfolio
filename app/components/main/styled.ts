import styled from 'styled-components'
import { Color, Opacity } from 'styles'

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 90rem;
`
export const Title = styled.h2`
  letter-spacing: 2px;
  margin: 0;
  font-weight: lighter;
  font-size: 2rem;
  border-bottom: 1px solid rgb(${Color.border.accent} / ${Opacity.full});
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 4rem;
`
