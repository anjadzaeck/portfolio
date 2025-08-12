import styled from 'styled-components'
import { Color, Opacity } from 'styles'

export const SpinnerContainer = styled.div`
  width: 8rem;
  height: 8rem;
  border: 4px solid rgb(${Color.border.default} / ${Opacity.medium});
  border-top: 4px solid rgb(${Color.border.default} / ${Opacity.full});
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
