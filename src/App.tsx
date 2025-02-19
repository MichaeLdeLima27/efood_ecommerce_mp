import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import Footer from './components/Footer'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container"></div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
