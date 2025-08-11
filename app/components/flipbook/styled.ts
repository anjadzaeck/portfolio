import styled from 'styled-components'
import { Color, Opacity } from 'styles'

export const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 3rem;
`

export const NavButton = styled.button`
  cursor: pointer;
  position: absolute;
  display: flex;
  top: 50%;
  padding: 1rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  color: rgb(${Color.icon.inverted} / ${Opacity.veryHigh});
  justify-content: center;
  align-items: center;
  border: none;
`
