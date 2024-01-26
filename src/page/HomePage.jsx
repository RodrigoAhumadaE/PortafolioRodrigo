import Habilidades from "../components/Habilidades";
import Navbar from "../components/Navbar";
import Proyectos from "../components/Proyectos";
// import Prueba from "../components/Prueba";
import SobreMi from "../components/SobreMi";
import Social from "../components/Social";

export default function HomePage() {
    return(
      <>
        <Navbar />
        <p id="sobremi"></p>
        <div className="container">
          <div className="seccion">
            <SobreMi />
            <span id="social"></span>
          </div>
          <div className="seccion">
            <Social />
            <span id="habilidades"></span>
          </div>
          <div className="seccion">
            <Habilidades />
            <span id="proyectos"></span>
          </div>        
          <div className="seccion">
            <Proyectos />
          </div>
        </div>
      </>        
    )    
  }