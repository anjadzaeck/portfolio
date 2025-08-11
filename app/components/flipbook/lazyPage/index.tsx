import { useRef } from 'react'
import { PageContainer } from './styled'
import { Page } from 'react-pdf'

const LazyPDFPage = ({ pageNumber, width }) => {
  const ref = useRef(null)

  return (
    <PageContainer ref={ref}>
      <Page
        pageNumber={pageNumber}
        width={Math.floor(width)}
        renderAnnotationLayer={false}
        renderTextLayer={false}
      />
    </PageContainer>
  )
}

export default LazyPDFPage
