import { StrictMode } from 'react'
import GlobalStyle from './styled'

import Header from 'components/header'

export default function App() {
  return (
    <StrictMode>
      <GlobalStyle />
      <div>
        <Header />
      </div>
    </StrictMode>
  )
}
