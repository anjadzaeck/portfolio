import styled from 'styled-components'
import { Color, Opacity } from 'styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & > div {
    width: 100%;
  }
`

export const NavButton = styled.button`
  cursor: pointer;
  position: absolute;
  display: flex;
  top: 50%;
  z-index: 3;
  padding: 1rem;
  border-radius: 50%;
  background-color: transparent;
  color: rgb(${Color.icon.inverted} / ${Opacity.veryHigh});
  justify-content: center;
  align-items: center;
  border: none;
`
