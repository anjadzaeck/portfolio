import { createGlobalStyle } from 'styled-components'
import { Color, Opacity } from 'styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        color: rgb(${Color.text.default} / ${Opacity.full});
    }

    body {
        max-height: 100vh;    
        overflow: auto;       
        background: rgb(${Color.background.primary} / ${Opacity.full});
    }
    
`

export default GlobalStyle
