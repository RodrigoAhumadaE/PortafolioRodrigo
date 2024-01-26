import perfil from "../assets/img/perfil.webp";
import "../page/css/SobreMi.css";

export default function SobreMi() {
  return (
    <>
      <div className="titulo">
        <h1>Rodrigo Ahumada</h1>
        <h3>
          Analista Programador Computacional · Desarrollador Fullstack C# .Net ·
          Desarrollador Front-end React JS
        </h3>
      </div>
      <div className="card">
        <div className="foto-perfil">
          <img src={perfil} alt="foto perfil" />
        </div>
        <div className="info-perfil">
          <p>
            Hola, soy un Analista Programador Computacional titulado en Duoc UC.
            Cuento con conocimientos en desarrollo web, también en diseño
            gráfico e ilustración digital. Me apasiona el diseño web y busco
            especializarme en esa área.
          </p>
          {/* <span id="social"></span> */}
        </div>
      </div>
    </>
  );
}
