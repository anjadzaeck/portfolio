import styled from 'styled-components'
import { Spacing, Color, Opacity } from 'styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${Spacing.size100} ${Spacing.size400};
  background-color: rgb(247 246 244);
  border-bottom: 1px solid rgb(${Color.border.default} / ${Opacity.full});
`

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`

export const Title = styled.h1`
  margin-bottom: 0;
  font-weight: lighter;
`

export const SubTitle = styled.h3`
  color: rgb(${Color.text.subtle} / ${Opacity.full});
  font-weight: lighter;
`
