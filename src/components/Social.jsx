import { FaGithub, FaLinkedin, FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../page/css/Social.css";

export default function Social() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("rod.ahumada@duocuc.cl");
    toast("¡¡Correo copiado!!", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <div className="titulo">
        <h2>Social</h2>
      </div>
      <div className="social">
        <div className="card-social">
          <a
            className="link-social"
            href="https://github.com/RodrigoAhumadaE"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <strong>
              <p>GitHub</p>
            </strong>
          </a>
        </div>
        <div className="card-social">
          <a
            className="link-social"
            href="https://www.linkedin.com/in/rodrigo-ahumada-espinoza/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            <strong>
              <p>LinkeIn</p>
            </strong>
          </a>
        </div>
        <div className="card-social">
          <a
            className="link-social"
            href="../assets/Rodrigo_Ahumada.pdf"
            download="Rodrigo_Ahumada.pdf"
          >
            <strong>
              <p>CV en PDF</p>
            </strong>
          </a>
        </div>
      </div>
      <span id="habilidades"></span>
      <div className="correo">
        <div className="card-social">
          <a className="link-social" href={"mailto:rod.ahumada@duocuc.cl"}>
            rod.ahumada@duocuc.cl
          </a>
        </div>
        <div className="card-social">
          <a className="link-social" onClick={copyToClipboard}>
            <FaCopy />
          </a>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
