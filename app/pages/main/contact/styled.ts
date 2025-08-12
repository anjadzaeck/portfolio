import styled from 'styled-components'
import { Color, Opacity } from 'styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  width: 100%;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const SubTitle = styled.span`
  font-size: 1rem;
`

export const Highlight = styled.span`
  color: rgb(${Color.text.accent} / ${Opacity.full});
  font-weight: normal;
  font-size: 1.3rem;
`
