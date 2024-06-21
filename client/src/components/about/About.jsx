import style from './About.module.css'

function About() {
  return (
    <div className={style.container} id='about'>
            <div className={style.image}><img src="./giyo.png" alt="" /></div>
            <div className={style.imag}></div>
            <div className={style.caja}>
                <h3>Sobre nosotros</h3>
                <p><span>RUGIR</span> es un emprendimiento marplatense, que comenzo como un hobby, y de apoco, y gracias a ustedes pudo ir creciendo hasta convertirse hoy en día, en nuestra fuente de trabajo.<br/> Estamos felices, que atraves de nuestros productos, nuestros clientes puedan trasmitir a su ser querido u a esa persona tan especial, su cariño y eligiendonos como su regalo a entregar.</p>
            </div>
    </div>
  )
}

export default About