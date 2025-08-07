import { css, keyframes } from 'styled-components'
import { Color, Opacity } from 'styles'

export const overflowEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const lineClampEllipsis = (numLines: number) => css`
  -webkit-line-clamp: ${numLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
`

export const boxShadowOnHover = css`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow:
      0 0 #0000,
      0 0 #0000,
      0 0 20px rgb(${Color.background.subtle} / ${Opacity.medium});
  }
`

export const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px 1px rgb(${Color.background.subtle} / ${Opacity.low});
  }
  50% {
    box-shadow: 0 0 30px 4px rgb(${Color.background.subtle} / ${Opacity.medium});
  }
`

export const customScrollbar = css`
  ::-webkit-scrollbar {
    width: 8px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  :hover::-webkit-scrollbar {
    opacity: 1;
  }

  ::-webkit-scrollbar-track {
    background: rgb(${Color.background.inverted} / ${Opacity.full});
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(${Color.background.inverted} / ${Opacity.full});
    border-radius: 4px;
    transition: background 0.3s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(${Color.background.inverted} / ${Opacity.veryHigh});
  }

  /* Scrollbar for Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgb(${Color.background.default} / ${Opacity.medium})
      rgb(${Color.background.inverted} / ${Opacity.full});
  }

  :hover {
    scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
  }
`
