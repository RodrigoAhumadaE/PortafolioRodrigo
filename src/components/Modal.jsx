import React from 'react';

class Modal extends React.Component{
  
  abrirModal = (nombre) => {
    let elementModal = document.getElementById(nombre);
    let elementContainer = document.querySelector(".container");
    elementModal.classList.remove("ocultar");
    elementModal.classList.add("mostrar");
    elementContainer.classList.add("desenfocar");
  };

  cerrarModal = (nombre) => {
    let elementModal = document.getElementById(nombre);
    let elementContainer = document.querySelector(".container");
    elementModal.classList.remove("mostrar");
    elementModal.classList.add("ocultar");
    elementContainer.classList.remove("desenfocar");
  };
}

export default Modal;