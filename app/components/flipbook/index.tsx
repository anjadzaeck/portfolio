import { NavButton, SliderWrapper, Wrapper, PageContainer } from './styled'
import { Document, Page, pdfjs } from 'react-pdf'
import HTMLFlipBook from 'react-pageflip'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Loading from './loading'
import Spinner from 'components/spinner'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

const FlipBook = () => {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [pageSize, setPageSize] = useState({ width: 600, height: 424 })
  const bookRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const portfolio = `${process.env.PUBLIC_URL}/assets/portfolio.pdf`

  const updatePageSize = () => {
    const containerWidth = containerRef.current?.offsetWidth || 600
    const mobile = containerWidth < 768
    setIsMobile(mobile)

    // if mobile, 1 page = full width; else 2 pages share container
    const pageWidth = mobile ? containerWidth : containerWidth / 2
    const pageHeight = pageWidth / 1.414 // maintain A-series ratio

    setPageSize({ width: pageWidth, height: pageHeight })
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    updatePageSize()
    window.addEventListener('resize', updatePageSize)
    return () => window.removeEventListener('resize', updatePageSize)
  }, [])

  const handleNext = () => bookRef.current?.pageFlip()?.flipNext()
  const handlePrev = () => bookRef.current?.pageFlip()?.flipPrev()

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages)

  const onFlip = (e) => {
    setCurrentPage(e.data) // react-pageflip event gives current page index
  }

  useEffect(() => {
    bookRef.current?.pageFlip()?.flip(currentPage)
  }, [currentPage])

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const page = Number(e.target.value)
    setCurrentPage(page)
  }

  return (
    <Wrapper ref={containerRef} style={{ width: '100%', position: 'relative' }}>
      {!isMobile && (
        <NavButton onClick={handlePrev} style={{ left: '0' }}>
          <ChevronLeft size={30} />
        </NavButton>
      )}

      <Document
        file={portfolio}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<Loading />}
      >
        {numPages !== null && (
          // @ts-ignore
          <HTMLFlipBook
            width={pageSize.width}
            height={pageSize.height}
            size={isMobile ? 'fixed' : 'stretch'}
            ref={bookRef}
            maxShadowOpacity={0.5}
            drawShadow={false}
            showCover={false}
            useMouseEvents={true}
            usePortrait={isMobile}
            autoSize={true}
            onFlip={onFlip}
          >
            {Array.from({ length: numPages }, (_, index) => (
              <PageContainer key={index}>
                <Page
                  pageNumber={index + 1}
                  width={pageSize.width}
                  height={pageSize.height}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  loading={
                    <div style={{ width: '100%', height: '100%' }}>
                      <Spinner />
                    </div>
                  }
                />
              </PageContainer>
            ))}
          </HTMLFlipBook>
        )}
      </Document>

      {!isMobile && (
        <NavButton onClick={handleNext} style={{ right: '0' }}>
          <ChevronRight size={30} />
        </NavButton>
      )}

      {!isMobile && numPages && (
        <SliderWrapper>
          {/*{numPages && (*/}
          {/*  <Tooltip*/}
          {/*    style={{*/}
          {/*      left: `calc(${(currentPage / (numPages - 1)) * 100} + 2rem)%`*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Page {currentPage + 1}*/}
          {/*  </Tooltip>*/}
          {/*)}*/}
          <input
            type={'range'}
            min={0}
            max={numPages - 1}
            value={currentPage}
            onChange={handleSliderChange}
          />
        </SliderWrapper>
      )}
    </Wrapper>
  )
}

export default FlipBook
