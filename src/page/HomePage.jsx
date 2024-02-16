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
        <div className="container">
          <Navbar />
          <div className="seccion" id="sobremi">
            <SobreMi />
          </div>
          <div className="seccion" id="social">
            <Social />
          </div>
          <div className="seccion" id="habilidades">
            <Habilidades />
          </div>        
          <div className="seccion" id="proyectos">
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