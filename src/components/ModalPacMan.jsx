import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pacman from "./ImagenesPacMan";
import "../page/css/Modal.css";
import { RiCloseFill } from "react-icons/ri";
import Modal from "./Modal";

export default function ModalPacMan() {

  const modal = new Modal();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          dots: true,
          arrows: false
        }
      },
    ]
  };

  return(
    <>
      <div className="modal-img">
        <div className="header-modal">
          <div className="titulo-modal">
            <h3>PacMan Alternativo</h3>
          </div>
          <div className="cerrar">
            <p onClick={() => {modal.cerrarModal("pacman")}}><RiCloseFill /></p>
          </div>           
        </div>
        <div className="content-slider">
          <Slider {...settings}>
            {pacman.map((data, index) => (
              <div className="card-slider" key={index}>
                <h4>{data.nombre}</h4>
                <img src={data.img} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );

}