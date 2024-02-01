import React from 'react';

class Modal extends React.Component{
  
  abrirModal = (nombre) => {
    console.log(nombre);
    let elementModal = document.getElementById(nombre);
    let elementContainer = document.querySelector(".container");
    console.log(elementModal, elementContainer);
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

  return;
}

export default Modal;