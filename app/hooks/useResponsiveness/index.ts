import { Breakpoints } from 'styles'
import { useMediaQuery } from 'react-responsive'

const useResponsiveness = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${Breakpoints.mobile.large.width}px)`
  })
  const isTablet = useMediaQuery({
    query: `(min-width: ${Breakpoints.tablet.small.width}px) and (max-width: ${Breakpoints.tablet.large.width}px)`
  })
  const isLaptop = useMediaQuery({
    query: `(min-width: ${Breakpoints.laptop.small.width}px) and (max-width: ${Breakpoints.laptop.large.width}px)`
  })
  const isDesktop = useMediaQuery({
    query: `(min-width: ${Breakpoints.desktop.small.width}px)`
  })

  const isSmall = useMediaQuery({
    query: `(max-width: ${Breakpoints.tablet.medium.width}px)`
  })

  const isWide = useMediaQuery({
    query: `(min-width: ${Breakpoints.laptop.medium.width}px)`
  })

  // const isWide: isDesktop
  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isSmall,
    isWide
  }
}

export const useHeightResponsiveness = () => {
  const isShortMobile = useMediaQuery({
    query: `(max-height: ${Breakpoints.mobile.medium.height}px)` // Very small screens (e.g., iPhone SE)
  })

  const isMediumMobile = useMediaQuery({
    query: `(min-height: ${Breakpoints.mobile.small.height}px) and (max-height: ${Breakpoints.mobile.medium.height}px)` // Standard mobile heights
  })

  const biggerThanTallMobile = useMediaQuery({
    query: `(max-height: ${Breakpoints.mobile.large.height}px)` // Taller phones (e.g., iPhone X, Galaxy S20)
  })

  const isExtraTallMobile = useMediaQuery({
    query: `(min-height: ${Breakpoints.mobile.large.height}px)` // Extra-tall devices (e.g., foldables, large-screen phones)
  })

  const isMobile = useMediaQuery({
    query: `(max-height: ${Breakpoints.mobile.large.height}px)` // Phones only, excluding tablets
  })

  const isTall = useMediaQuery({
    query: `(min-height: ${Breakpoints.desktop.medium.height}px)`
  })

  return {
    isShortMobile,
    isMediumMobile,
    biggerThanTallMobile,
    isExtraTallMobile,
    isMobile,
    isTall
  }
}

export default useResponsiveness
