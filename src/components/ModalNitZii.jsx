import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import nitzii from "./ImagenesNitZii";
import "../page/css/Modal.css";
import { RiCloseFill } from "react-icons/ri";
import Modal from "./Modal";

export default function ModalNitZii() {

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
            <h3>NitZii</h3>
          </div>
          <div className="cerrar">
            <p onClick={() => {modal.cerrarModal("nitzii")}}><RiCloseFill /></p>
          </div>           
        </div>
        <div className="content-slider">
          <Slider {...settings}>
            {nitzii.map((data, index) => (
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
