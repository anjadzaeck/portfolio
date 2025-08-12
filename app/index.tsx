import { StrictMode } from 'react'
import GlobalStyle from './styled'

import Header from 'components/header'
import Main from 'pages/main'

export default function App() {
  console.log(
    'process.env.PUBLIC_URL',
    process.env.PUBLIC_URL,
    process.env.NODE_ENV
  )
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
