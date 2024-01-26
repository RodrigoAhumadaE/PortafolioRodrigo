import '../page/css/Habilidades.css'
import listaHabilidades from './ListaHabilidades'

export default function Habilidades() {

  return(
    <>
      <div className="titulo">
        <h2>Habilidades</h2>
      </div>
      <div className="lista">
        {listaHabilidades.map((data, index) => (
          <div className="habilidad" key={index}>
            <img src={data.img} alt={`imagen ${data.nombre}`} />
            <p>{data.nombre}</p>
          </div>
        ))}
      </div>   
    </> 
  )
}