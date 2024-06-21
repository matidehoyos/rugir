import './App.css'
import About from './components/about/About'
import Alfombras from './components/alfombras/Alfombras'
import Categorias from './components/categorias/Categorias'
import Contact from './components/contact/Contact'
import Encargo from './components/encargo/Encargo'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import NavBar from './components/navBar/NavBar'
import Ubicacion from './components/ubicacion/Ubicacion'

function App() {
  const screenWidth = window.innerWidth; 


  return (
    <>
      <NavBar />
      <Header />
      <Encargo />
      <Categorias />
      <Ubicacion />
      {screenWidth < 768 && <Alfombras />}
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
