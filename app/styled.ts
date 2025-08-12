import { createGlobalStyle } from 'styled-components'
import { Color, Opacity } from 'styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// fonts
// Bold
import ZurichBoldOTF from './assets/fonts/ZurichBold.otf'

// Bold Italic
import ZurichBoldItalicOTF from './assets/fonts/ZurichBoldItalic.otf'

// Regular (BT)
import ZurichBT_TTF from './assets/fonts/ZurichBT.ttf'

// Condensed Regular (BT)
import ZurichCondensedBT_TTF from './assets/fonts/ZurichCondensedBT.ttf'

// Italic (OTF)
import ZurichItalicOTF from './assets/fonts/ZurichItalic.otf'

// Italic (BT)
import ZurichItalicBT_TTF from './assets/fonts/ZurichItalicBT.ttf'

// Light Italic
import ZurichLightItalicOTF from './assets/fonts/ZurichLightItalic.otf'

// Light Regular
import ZurichLightRegularOTF from './assets/fonts/ZurichLightRegular.otf'

// Regular (non-BT)
import ZurichRegularOTF from './assets/fonts/ZurichRegular.otf'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        height: 100%;
        scroll-behavior: smooth;
        margin: 0;
        padding: 0;
        color: rgb(${Color.text.default} / ${Opacity.full});
    }

    body {
        max-height: 100vh;    
        overflow: auto;
        font-family: 'Zurich Condensed BT', sans-serif;
        background: rgb(${Color.background.primary} / ${Opacity.full});
    }


/* Regular */
@font-face {
  font-family: 'Zurich';
  src: url(${ZurichRegularOTF}) format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Bold */
@font-face {
  font-family: 'Zurich';
  src: url(${ZurichBoldOTF}) format('opentype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Bold Italic */
@font-face {
  font-family: 'Zurich';
  src: url(${ZurichBoldItalicOTF}) format('opentype');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

/* Italic (OTF) */
@font-face {
  font-family: 'Zurich';
  src: url(${ZurichItalicOTF}) format('opentype');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

/* Italic (BT) */
@font-face {
  font-family: 'Zurich BT';
  src: url(${ZurichItalicBT_TTF}) format('truetype');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

/* BT Regular */
@font-face {
  font-family: 'Zurich BT';
  src: url(${ZurichBT_TTF}) format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* BT Condensed */
@font-face {
  font-family: 'Zurich Condensed BT';
  src: url(${ZurichCondensedBT_TTF}) format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Light Regular */
@font-face {
  font-family: 'Zurich Light';
  src: url(${ZurichLightRegularOTF}) format('opentype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

/* Light Italic */
@font-face {
  font-family: 'Zurich Light';
  src: url(${ZurichLightItalicOTF}) format('opentype');
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}
    

`

export default GlobalStyle
