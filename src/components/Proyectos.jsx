import nitzii from "../assets/img/inicioNitZii.png";
import pacman from "../assets/img/PacmanAlternativo.png";
import redprotec from "../assets/img/reddeproteccioncl.png";
import reactjs from "../assets/img/ReactJS.png";
import vite from "../assets/img/Vite.png";
import ccharp from "../assets/img/CCharp.png";
import dotnet from "../assets/img/DotNet.png";
import mysql from "../assets/img/MySQL.png";
import html from "../assets/img/HTML.png";
import css from "../assets/img/CSS.png";
import js from "../assets/img/JS.png";
import "../page/css/Proyectos.css";

export default function Proyectos() {
  return (
    <>
      <div className="titulo">
        <h2>Proyectos</h2>
      </div>
      <div className="card-proyecto">
        <div className="encabezado">
          <h4>Red Social NitZii</h4>
          <img src={nitzii} alt="Imagen pagina de inicio NitZii" />
        </div>
        <div className="descripcion">
          <p>
            Red social enfocada en la crítica y calificación de películas,
            desarrollada como proyecto de título, actualmente se encuentra en
            construcción, ya que tengo como objetivo rehacerla implementado
            todos los conocimientos adquiridos en el último tiempo. Está
            desarrollada en React JS y Vite en el Front-end, C# .Net en el
            Back-end y MySQL para la base de datos, la información de las
            películas está sacada de la API pública de The Movie DB.
          </p>
          <div className="herramientas">
            <div className="link"></div>
            <div className="img-herramientas">
              <img src={reactjs} alt="logo react js" />
              <img src={vite} alt="logo vite" />
              <img src={ccharp} alt="logo C#" />
              <img src={dotnet} alt="logo .Net" />
              <img src={mysql} alt="logo MySQL" />
            </div>
          </div>
        </div>
      </div>
      <div className="card-proyecto">
        <div className="encabezado">
          <h4>Página reddeproteccion.cl</h4>
          <img
            src={redprotec}
            alt="Imagen pagina de inicio reddeproteccion.cl"
          />
        </div>
        <div className="descripcion">
          <p>
            Durante mi práctica profesional en la empresa Anticipa s.a. trabajé
            como desarrollador Front-end junto al equipo encargado del
            desarrollo y mantención de la página web www.reddeproteccion.cl del
            Ministerio de Desarrollo Social y Familia. Mi función principal fue
            la de resolver los requerimientos del cliente en la parte visual de
            la página.
          </p>
          <div className="herramientas">
            <div className="link">
              <a
                href="https://www.reddeproteccion.cl"
                target="_blank"
                rel="noreferrer"
              >
                www.reddeproteccion.cl
              </a>
            </div>
            <div className="img-herramientas">
              <img src={reactjs} alt="logo react js" />
              <img src={html} alt="logo HTML" />
              <img src={css} alt="logo CSS" />
              <img src={js} alt="logo Javascript" />
            </div>
          </div>
        </div>
      </div>
      <div className="card-proyecto">
        <div className="encabezado">
          <h4>Pac-Man Alternativo</h4>
          <img src={pacman} alt="Imagen juego pacman alternativo" />
        </div>
        <div className="descripcion">
          <p>
            Juego alternativo de Pac-Man, desarrollado en bootcamp Fullstack C#
            .Net, en el ítem de desarrollo web. Está realizado en HTML, CSS y
            Javascrip; el objetivo del ejercicio era llevar a la práctica lo
            aprendido referente al DOM y la lógica de programación.
          </p>
          <div className="herramientas">
            <div className="link">
              <a
                href="https://rodrigoahumadae.github.io/pacmanAlternativo/"
                target="_blank"
                rel="noreferrer"
              >
                Link Pac-Man Alternativo
              </a>
            </div>
            <div className="img-herramientas">
              <img src={html} alt="logo HTML" />
              <img src={css} alt="logo CSS" />
              <p id="social"></p>
              <img src={js} alt="logo JavaScript" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
