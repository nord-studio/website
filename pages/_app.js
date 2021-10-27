import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../styles/theme'
import { Global, css } from '@emotion/react'
import { prismDarkTheme } from '../styles/prism'
const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${prismDarkTheme};
          ::selection {
            background-color: #3B4252;
            color: #3B4252;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #3B4252;
          }
          html {
            min-width: 356px;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: #3B4252;
          }
          ::-webkit-scrollbar {
            width: 8px;
            background: #4C566A;
          }

          ::-webkit-scrollbar-thumb {
            background: #2E3440;
            border-radius: 8px;
          }
        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  )
}
export default MyApp
