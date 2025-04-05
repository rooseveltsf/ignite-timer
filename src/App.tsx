import { ThemeProvider } from 'styled-components';
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from './styles/global'


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World teste</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
