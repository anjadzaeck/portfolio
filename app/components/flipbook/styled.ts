import styled from 'styled-components'
import { Color, Opacity } from 'styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;

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
  padding: 0.3rem;
  border-radius: 50%;
  background-color: transparent;
  color: rgb(${Color.icon.inverted} / ${Opacity.veryHigh});
  justify-content: center;
  align-items: center;
  border: none;
`

export const SliderWrapper = styled.div`
  margin-top: 1rem;
  justify-content: center;
  display: flex;
  position: relative;

  input {
    width: 80%;
    max-width: 50rem;
  }

  /* basic range styling */
  input[type='range'] {
    -webkit-appearance: none;
    height: 0.5rem;
    background: rgb(184 184 184 / ${Opacity.full});
    border-radius: 0.3rem;
    outline: none;
  }

  /* webkit browsers thumb */
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 4rem;
    height: 0.5rem;
    border-radius: 0.3rem;
    background: rgb(92 92 92 / ${Opacity.full});
    cursor: pointer;
    border: none;
  }

  /* firefox thumb */
  input[type='range']::-moz-range-thumb {
    width: 4rem;
    height: 0.5rem;
    border-radius: 0.3rem;
    background: rgb(92 92 92 / ${Opacity.full});
    cursor: pointer;
    border: none;
  }
`

export const Tooltip = styled.div`
  position: absolute;
  bottom: -2rem;
  background: #333;
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.8rem;
  pointer-events: none;
  white-space: nowrap;
  transform: translateX(-50%);
  transition: left 0.15s ease;
`

export const PageContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
`
