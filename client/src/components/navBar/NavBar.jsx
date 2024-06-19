import style from './NavBar.module.css'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

function NavBar() {
  return (
    <div className={style.container}>
          <div className={style.logo}>
                <img src="./l.png" alt="Logo RugirMdq" />
          </div>
        <div className={style.menu}>
            <nav>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#about">nosotros</a></li>
                      <li><a href="#contact">Contacto</a></li>
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
