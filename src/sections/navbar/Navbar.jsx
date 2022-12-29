import Logo from '../../assets/logo.svg'
import data from './data'
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="/" className='nav__logo'>
          <img src={Logo} alt="Logo Mateus Gabriel - Web Developer" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar