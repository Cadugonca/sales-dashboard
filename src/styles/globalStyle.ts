import { pxToRem } from '@/utils'
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

    .skeleton-loading {
      animation: skeleton-loading 2s infinite alternate;
    }

    @keyframes skeleton-loading {
    from{
      background-color: ${(props) => props.theme.appSkeletonFrom};
    }
      from{
      background-color: ${(props) => props.theme.appSkeletonTo};
    }
}
    .skeleton-loading-mh-1 {
      min-height: ${pxToRem(175)};
    }
    .skeleton-loading-mh-2 {
      min-height: ${pxToRem(400)};
    }
    `
