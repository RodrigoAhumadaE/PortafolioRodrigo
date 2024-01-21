import Icono from '../assets/icono.png'
import '../page/css/Navbar.css'

export default function Navbar() {
  return(
    <nav className="navbar">
      <div className="icono-navbar">
        <a href="#sobremi"><img src={Icono} alt="icono página" /></a>
      </div>
      <div className="menu-navbar">
        <ul>
          <li className='nav-item'><a className='nav-link' href="#sobremi">Sobre Mi</a></li>
          <li className='nav-item'><a className='nav-link' href="#social">Social</a></li>
          <li className='nav-item'><a className='nav-link' href="#habilidades">Habilidades</a></li>
          <li className='nav-item'><a className='nav-link' href="#proyectos">Proyectos</a></li>
        </ul>
      </div>
    </nav>
  )
}