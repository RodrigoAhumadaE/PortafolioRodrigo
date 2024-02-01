import nitzii from "../assets/img/inicioNitZii.webp";
import pacman from "../assets/img/PacmanAlternativo.webp";
import redprotec from "../assets/img/reddeproteccioncl.webp";
import reactjs from "../assets/img/ReactJS.webp";
import vite from "../assets/img/Vite.webp";
import ccharp from "../assets/img/CCharp.webp";
import dotnet from "../assets/img/DotNet.webp";
import mysql from "../assets/img/MySQL.webp";
import html from "../assets/img/HTML.webp";
import css from "../assets/img/CSS.webp";
import js from "../assets/img/JS.webp";
import "../page/css/Proyectos.css";
import Modal from "./Modal";

export default function Proyectos() {

  const modal = new Modal();

  return (
    <>
      <div className="titulo">
        <h2>Proyectos</h2>
      </div>
      <div className="card-proyecto">
        <div className="encabezado">
          <h4>Red Social NitZii</h4>
          <img src={nitzii} alt="Imagen pagina de inicio NitZii" onClick={() => {modal.abrirModal("nitzii")}} />
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
            <div className="link">
              <a href="#" onClick={(e) => {e.preventDefault();}}>En construcción</a>
            </div>
            <div className="img-herramientas">
              <div className="contet-img">
                <img src={reactjs} alt="logo react js" />
              </div>
              <div className="contet-img">
                <img src={vite} alt="logo vite" />
              </div>
              <div className="contet-img">
                <img src={ccharp} alt="logo C#" />
              </div>
              <div className="contet-img">
                <img src={dotnet} alt="logo .Net" />
              </div>
              <div className="contet-img">
                <img src={mysql} alt="logo MySQL" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-proyecto">
        <div className="encabezado">
          <h4>Página RPS</h4>
          <img
            src={redprotec}
            alt="Imagen pagina de inicio reddeproteccion.cl"
            onClick={() => {modal.abrirModal("rps")}}
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
              <div className="contet-img">
                <img src={reactjs} alt="logo react js" />
              </div>
              <div className="contet-img">
                <img src={html} alt="logo HTML" />
              </div>
              <div className="contet-img">
                <img src={css} alt="logo CSS" />
              </div>
              <div className="contet-img">
                <img src={js} alt="logo Javascript" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-proyecto">
        <div className="encabezado">
          <h4>Pac-Man Alternativo</h4>
          <img src={pacman} alt="Imagen juego pacman alternativo" onClick={() => {modal.abrirModal("pacman")}} />
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
              <div className="contet-img">
                <img src={html} alt="logo HTML" />
              </div>
              <div className="contet-img">
                <img src={css} alt="logo CSS" />
              </div>
              <div className="contet-img">
                <img src={js} alt="logo JavaScript" />
              </div>                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
