import HeaderImage from '../../assets/header.svg'
import { FiLinkedin } from 'react-icons/fi'
import './header.css';

export const Header = () => {
  return (
    <header id="header">
      <div className=" header__container">
        <div className="header__profile">
          <div className="header__text">
            <h4>Olá, eu sou</h4>
            <h1>Mateus Gabriel</h1>
            <h4>Web and Mobile Developer</h4>
            <div className="header__button">
              <a href='https://www.linkedin.com/in/mateus-gabriel-8a4a92172/' target="_blank" className='btn__header'> Linkedin </a>
              <a href='https://github.com/mateusgabrielsilva' target="_blank" className='btn__header'> Github</a>
            </div>
          </div>
          <div className="header__image">
            <img src={HeaderImage} alt="Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}
