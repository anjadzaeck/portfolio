import { NavButton, Wrapper } from './styled'
import { Document, Page, pdfjs } from 'react-pdf'
import HTMLFlipBook from 'react-pageflip'
import { useEffect, useRef, useState } from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PageContainer } from './lazyPage/styled'
import Loading from './loading'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

const FlipBook = () => {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageSize, setPageSize] = useState({ width: 600, height: 424 })
  const bookRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const portfolio = `${process.env.PUBLIC_URL}/assets/portfolio.pdf`

  const updatePageSize = () => {
    const containerWidth = containerRef.current?.offsetWidth || 600
    const mobile = containerWidth < 768

    // if mobile, 1 page = full width; else 2 pages share container
    const pageWidth = mobile ? containerWidth : containerWidth / 2
    const pageHeight = pageWidth / 1.414 // maintain A-series ratio

    setPageSize({ width: pageWidth, height: pageHeight })
  }

  useEffect(() => {
    updatePageSize()
    window.addEventListener('resize', updatePageSize)
    return () => window.removeEventListener('resize', updatePageSize)
  }, [])

  const handleNext = () => bookRef.current?.pageFlip()?.flipNext()
  const handlePrev = () => bookRef.current?.pageFlip()?.flipPrev()

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages)

  return (
    <Wrapper
      ref={containerRef}
      style={{ width: '100%', overflow: 'hidden', position: 'relative' }}
    >
      <NavButton onClick={handlePrev} style={{ left: '0' }}>
        <ChevronLeft size={30} />
      </NavButton>

      <Document
        file={portfolio}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<Loading />}
      >
        {numPages !== null && (
          // @ts-ignore
          <HTMLFlipBook
            minWidth={400}
            maxWidth={3000}
            minHeight={400}
            maxHeight={5000}
            width={pageSize.width}
            height={pageSize.height}
            size={'stretch'}
            ref={bookRef}
            maxShadowOpacity={0.5}
            drawShadow={false}
            showCover={false}
            useMouseEvents={true}
            usePortrait={false}
            autoSize={true}
          >
            {Array.from({ length: numPages }, (_, index) => (
              <PageContainer key={index}>
                <Page
                  pageNumber={index + 1}
                  width={pageSize.width}
                  height={pageSize.height}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </PageContainer>
            ))}
          </HTMLFlipBook>
        )}
      </Document>

      <NavButton onClick={handleNext} style={{ right: '0' }}>
        <ChevronRight size={30} />
      </NavButton>
    </Wrapper>
  )
}

export default FlipBook
