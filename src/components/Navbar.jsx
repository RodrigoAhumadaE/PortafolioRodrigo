import Icono from '../assets/icono.webp'
import '../page/css/Navbar.css'

export default function Navbar() {

  // const handleClick = (event) => {
  //   const element = event.target;
  //   const scrollTo = document.getElementById(element.dataset.id);
  //   scrollTo.scrollIntoView({ behavior: "smooth", duration: 1500 });
  // };

  return(
    <nav className="navbar">
      <div className="icono-navbar">
        <a><img src={Icono} alt="icono página" /></a>
      </div>
      <div className="menu-navbar">
        <ul>
          <li className='nav-item'><a className='nav-link' href='#sobremi'>Sobre Mi</a></li>
          <li className='nav-item'><a className='nav-link' href='#social'>Social</a></li>
          <li className='nav-item'><a className='nav-link' href='#habilidades'>Habilidades</a></li>
          <li className='nav-item'><a className='nav-link' href='#proyectos'>Proyectos</a></li>
        </ul>
      </div>
    </nav>
  )
}