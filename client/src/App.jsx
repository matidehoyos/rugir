import './App.css'
import About from './components/about/About'
import Categorias from './components/categorias/Categorias'
import Contact from './components/contact/Contact'
import Encargo from './components/encargo/Encargo'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import NavBar from './components/navBar/NavBar'
import Ubicacion from './components/ubicacion/Ubicacion'

function App() {

  return (
    <>
      <NavBar />
      <Header />
      <Encargo />
      <Categorias />
      <Ubicacion />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
