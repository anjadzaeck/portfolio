import styled from 'styled-components'
import { Color, Opacity } from 'styles'

export const PageWrapper = styled.div`
  background-color: rgb(251, 250, 249);
  width: 100%;
  max-width: 90rem;
  margin: 2rem auto;
  border-radius: 0.5rem;
  padding: 4rem;

  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 25px 50px -12px rgb(0 0 0 / 0.25);
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
