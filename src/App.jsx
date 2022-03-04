//import css
import './Sass/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//import components
import Header from './components/Header'
import Main from './components/Main'
import Span from './components/Span'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App container">
        <Header />
        <Main />
        <Span />
        <Footer />
    </div>
  )
}

export default App
