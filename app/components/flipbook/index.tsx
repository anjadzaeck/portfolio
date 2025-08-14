import { NavButton, SliderWrapper, Wrapper, PageContainer } from './styled'
import HTMLFlipBook from 'react-pageflip'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const FlipBook = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [pageSize, setPageSize] = useState({ width: 600, height: 424 })
  const bookRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Array of pre-rendered PNGs in /public/assets/pages/
  const images = Array.from(
    { length: 38 },
    (_, i) => `${process.env.PUBLIC_URL}/assets/pages/page-${String(i + 1)}.png`
  )

  const updatePageSize = () => {
    const containerWidth = containerRef.current?.offsetWidth || 600
    const mobile = containerWidth < 768
    setIsMobile(mobile)

    const pageWidth = mobile ? containerWidth : containerWidth / 2
    const pageHeight = pageWidth / 1.414 // Keep A-series ratio

    setPageSize({
      width: Math.round(pageWidth),
      height: Math.round(pageHeight)
    })
  }

  useEffect(() => {
    window.addEventListener('resize', updatePageSize)
    updatePageSize()
    return () => window.removeEventListener('resize', updatePageSize)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext()
      else if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleNext = () => bookRef.current?.pageFlip()?.flipNext()
  const handlePrev = () => bookRef.current?.pageFlip()?.flipPrev()
  const onFlip = (e: any) => setCurrentPage(e.data)
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentPage(Number(e.target.value))

  useEffect(() => {
    bookRef.current?.pageFlip()?.flip(currentPage)
  }, [currentPage])

  return (
    <Wrapper ref={containerRef} style={{ width: '100%', position: 'relative' }}>
      {!isMobile && (
        <NavButton onClick={handlePrev} style={{ left: '0' }}>
          <ChevronLeft size={30} />
        </NavButton>
      )}

      {/* @ts-ignore*/}
      <HTMLFlipBook
        width={pageSize.width}
        height={pageSize.height}
        size={isMobile ? 'fixed' : 'stretch'}
        ref={bookRef}
        maxShadowOpacity={0.5}
        drawShadow={false}
        showCover={false}
        useMouseEvents
        usePortrait={isMobile}
        autoSize
        onFlip={onFlip}
      >
        {images.map((src, index) => (
          <PageContainer key={index}>
            <LazyLoadImage
              src={src}
              alt={`Page ${index + 1}`}
              effect={'blur'}
              width={pageSize.width}
              height={pageSize.height}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </PageContainer>
        ))}
      </HTMLFlipBook>

      {!isMobile && (
        <NavButton onClick={handleNext} style={{ right: '0' }}>
          <ChevronRight size={30} />
        </NavButton>
      )}

      {!isMobile && (
        <SliderWrapper>
          <input
            type="range"
            min={0}
            max={images.length - 1}
            value={currentPage}
            onChange={handleSliderChange}
          />
        </SliderWrapper>
      )}
    </Wrapper>
  )
}

export default FlipBook
