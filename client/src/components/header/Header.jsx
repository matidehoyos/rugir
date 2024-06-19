import Imagenes from '../imagenes/Imagenes'
import style from './Header.module.css'

function Header() {
    return (
        <div className={style.container}>
            <div className={style.subcontainer}>
                <div className={style.caja}>
                    <div className={style.first}>
                        <div className={style.titular}>
                            <h1 className={style.titulo}>TUFTING RUGS <br/> ALFOMBRAS<br/> TAPETES</h1>
                            <p className={style.amano}>HECHO A MANO</p>
                            <h4 className={style.personalizados}>DISEÑOS PERSONALIZADOS</h4>
                        </div>
                    </div>
                    <div className={style.imagenes}>
                        <Imagenes />
                    </div>
                </div>
                <div className={style.regalo}>
                    <h4>EL REGALO PERFECTO NO EXIS...</h4>
                </div>
            </div>
            </div>
    )
}

export default Header