import { StrictMode } from 'react'
import GlobalStyle from './styled'

import Header from 'components/header'
import Main from 'components/main'

export default function App() {
  return (
    <StrictMode>
      <GlobalStyle />
      <div>
        <Header />
        <Main />
      </div>
    </StrictMode>
  )
}
