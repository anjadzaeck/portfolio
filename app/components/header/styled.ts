import styled, { css } from 'styled-components'
import { Spacing, Color, Opacity } from 'styles'

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

export const Navigation = styled.nav`
  display: flex;
  gap: ${Spacing.size400};
  font-weight: lighter;
`

export const NavItem = styled.a<{ $active?: boolean }>`
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: lighter;
  color: rgb(${Color.text.subtle} / ${Opacity.full});
  text-decoration: none;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: rgb(${Color.text.accent} / ${Opacity.full});
    text-decoration: underline;
  }

  ${({ $active }) =>
    $active &&
    css`
      color: rgb(${Color.text.accent} / ${Opacity.full});
    `};
`

export const Container = styled.div<{ $mobileView: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Spacing.size100} ${Spacing.size500};
  background-color: rgb(247 246 244);
  border-bottom: 1px solid rgb(${Color.border.default} / ${Opacity.full});

  ${({ $mobileView }) =>
    $mobileView &&
    css`
      ${NavItem} {
        font-size: 0.8rem;
      }

      ${Title} {
        font-size: 1rem;
      }

      ${SubTitle} {
        display: none;
      }
    `}
`
