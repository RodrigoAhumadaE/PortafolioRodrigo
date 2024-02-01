import Habilidades from "../components/Habilidades";
import ModalNitZii from "../components/ModalNitZii";
import ModalPacMan from "../components/ModalPacMan";
import ModalRPS from "../components/ModalRPS";
import Navbar from "../components/Navbar";
import Proyectos from "../components/Proyectos";
import SobreMi from "../components/SobreMi";
import Social from "../components/Social";

export default function HomePage() {
    return(
      <>
        <p id="sobremi"></p>
        <div className="container">
          <Navbar />
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
        <div className="modal ocultar" id="nitzii">
          <ModalNitZii />
        </div>        
        <div className="modal ocultar" id="rps">
          <ModalRPS />
        </div>        
        <div className="modal ocultar" id="pacman">
          <ModalPacMan />
        </div>        
      </>        
    )    
  }