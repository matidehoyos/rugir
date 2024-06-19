import style from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

function NavBar() {
  return (
    <div className={style.container}>
        <Link to="/">
          <div className={style.logo}>
                <img src="./ll.png" alt="Logo RugirMdq" />
          </div>
        </Link>  
        <div className={style.menu}>
            <nav>
                    <ul>
                      <li><a href="">Home</a> </li>
                      <li><a href="">Nosotros</a></li>
                      <li><a href="">Contacto</a></li>
                    </ul>
              </nav>
        </div>
        <div className={style.redes}>
            <nav>
                    <ul>
                      <li><a href=""><FaInstagram /></a> </li>
                      <li><a href=""><FaFacebook /></a></li>
                      <li><a href=""><FaWhatsapp /></a></li>
                    </ul>
              </nav>
        </div>
    </div>
  )
}

export default NavBar
