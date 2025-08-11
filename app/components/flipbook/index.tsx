import { NavButton, Wrapper } from './styled'
import { Document, Page, pdfjs } from 'react-pdf'
import HTMLFlipBook from 'react-pageflip'
import { useEffect, useRef, useState } from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PageContainer } from './lazyPage/styled'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

const FlipBook = () => {
  const [numPages, setNumPages] = useState<null | number>(null)
  const bookRef = useRef<any>(null) // OR use the correct type if needed
  const [pageSize, setPageSize] = useState({ width: 600, height: 424 })
  const portfolio = '/assets/PF_short.pdf'

  const updatePageSize = () => {
    const isMobile = window.innerWidth < 768
    const maxSpreadWidth = isMobile
      ? window.innerWidth * 0.95
      : Math.min(window.innerWidth * 0.75, 1000) // narrower max width

    // One page width
    const pageWidth = isMobile ? maxSpreadWidth : maxSpreadWidth / 2
    const pageHeight = pageWidth / 1.414 // A-series landscape ratio

    setPageSize({ width: pageWidth, height: pageHeight })
  }
  useEffect(() => {
    updatePageSize()
    window.addEventListener('resize', updatePageSize)
    return () => window.removeEventListener('resize', updatePageSize)
  }, [])

  const handleNext = () => {
    bookRef.current.pageFlip().flipNext()
  }

  const handlePrev = () => {
    bookRef.current.pageFlip().flipPrev()
  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  return (
    <Wrapper>
      <NavButton onClick={handlePrev} style={{ left: '-2rem' }}>
        <ChevronLeft size={30} />
      </NavButton>
      <Document
        file={portfolio}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div>Loading PDF...</div>}
      >
        {numPages !== null && numPages > 0 && (
          // @ts-ignore
          <HTMLFlipBook
            width={pageSize.width}
            height={pageSize.height}
            size="fixed"
            ref={bookRef}
            showCover={true}
            mobileScrollSupport={true}
            maxShadowOpacity={0.5}
            drawShadow={true}
            useMouseEvents={true}
            usePortrait={false} // ensures 2-page view
            autoSize={true}
          >
            {Array.from({ length: numPages }, (_, index) => (
              <PageContainer key={index}>
                <Page
                  pageNumber={index + 1}
                  width={pageSize.width}
                  height={pageSize.height}
                  renderAnnotationLayer={false}
                />
              </PageContainer>
            ))}
          </HTMLFlipBook>
        )}
      </Document>
      <NavButton onClick={handleNext} style={{ right: '-2rem' }}>
        <ChevronRight size={30} />
      </NavButton>
    </Wrapper>
  )
}

export default FlipBook
