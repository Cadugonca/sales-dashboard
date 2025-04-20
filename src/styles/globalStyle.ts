import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
  body, html {
  background: ${(props) => props.theme.appBackground};
  color: ${(props) => props.theme.appColor};
  
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    }
    h1, h2, p, ul, li, figure {
      margin: 0;
        padding: 0;
}

.mb-1 {
  margin-bottom: 1rem;
}
.mb-2 {
  margin-bottom: 2rem;
}

    `
