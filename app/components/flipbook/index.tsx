import {
  NavButton,
  SliderWrapper,
  Wrapper,
  PageContainer,
  IconWrapper
} from './styled'
import HTMLFlipBook from 'react-pageflip'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import {
  ChangeEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState
} from 'react'
import ImagePreview from './imagePreview'
import useKeyPress from 'hooks/useKeyPress'

const FlipBook = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [previewedImage, setPreviewedImage] = useState<null | string>(null)
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

  const handleNext = () => {
    if (previewedImage !== null) {
      setPreviewedImage(null)
    }
    bookRef.current?.pageFlip()?.flipNext()
  }
  const handlePrev = () => {
    if (previewedImage !== null) {
      setPreviewedImage(null)
    }
    bookRef.current?.pageFlip()?.flipPrev()
  }

  useKeyPress('ArrowRight', handleNext)
  useKeyPress('ArrowLeft', handlePrev)

  const onFlip = (e: any) => {
    setCurrentPage(e.data)
  }

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCurrentPage(Number(e.target.value))

  useEffect(() => {
    bookRef.current?.pageFlip()?.flip(currentPage)
  }, [currentPage])

  const handleMaximizeImage =
    (src: string | null): MouseEventHandler =>
    (e) => {
      e.preventDefault()
      e.stopPropagation()
      setPreviewedImage(src)
    }

  const handleClosePreview = () => {
    setPreviewedImage(null)
  }

  return (
    <Wrapper ref={containerRef} style={{ width: '100%', position: 'relative' }}>
      {!isMobile && (
        <NavButton onClick={handlePrev} style={{ left: '0' }}>
          <ChevronLeft size={30} />
        </NavButton>
      )}

      <ImagePreview src={previewedImage} onClose={handleClosePreview} />
      {/* @ts-ignore*/}
      <HTMLFlipBook
        width={pageSize.width}
        height={pageSize.height}
        size={isMobile ? 'fixed' : 'stretch'}
        ref={bookRef}
        maxShadowOpacity={0.5}
        drawShadow={false}
        showCover={false}
        showPageCorners={false}
        useMouseEvents={false}
        usePortrait={isMobile}
        disableFlipByClick={true}
        autoSize
        onFlip={onFlip}
      >
        {images.map((src, index) => (
          <PageContainer key={index}>
            <>
              <img
                src={src}
                alt={`Page ${index + 1}`}
                width={pageSize.width}
                height={pageSize.height}
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <IconWrapper
                $isLeft={index % 2 === 0}
                onClick={handleMaximizeImage(src)}
              >
                <Maximize2 />
              </IconWrapper>
            </>
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
