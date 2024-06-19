import style from './Categorias.module.css'

function Categorias() {

    const images = [
        './simpsom.png',
        './serie.png',
        './diego.png',
        './aldo.png',
        './tx.png',
        './racing.png',
      ];
      

  return (
    <div className={style.container}>
        <div className={style.caja}>
            <p>DEPORTES</p>
            <p>CINE</p>
            <p>AUTOS</p>
            <p>ANIMALES</p>
            <p>ESCUDOS</p>
            <p>PERSONAJES</p>
            <p>FRASES</p>
            <p>NOMBRES</p>
        </div>
        <div className={style.cajaImg}>
            {
                images.map((image, index) => (
                    <img key={index} src={image} className={style.image} alt="Product" />
                  ))}
        </div>
    </div>
  )
}

export default Categorias