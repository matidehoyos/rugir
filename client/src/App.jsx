import './App.css'
import Categorias from './components/categorias/Categorias'
import Encargo from './components/encargo/Encargo'
import Header from './components/header/Header'
import NavBar from './components/navBar/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Header />
      <Encargo />
      <Categorias />
    </>
  )
}

export default App
