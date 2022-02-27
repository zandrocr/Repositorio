//import css
import './Sass/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//import components
import Header from './components/Header'
import Main from './components/Main'
import Back from './components/Back'

function App() {

  return (
    <div className="App container">
        <Header />
        <Back />
        <Main />
    </div>
  )
}

export default App
