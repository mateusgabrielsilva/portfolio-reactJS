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
              <a href='https://api.whatsapp.com/send?phone=5512996751672&text=Ol%C3%A1%20Mateus,%20gostaria%20de%20saber%20mais%20a%20respeito%20do%20desenvolvimento%20de%20sites%20e%20aplicativos.%20' target="_blank" className='btn__header'> Whatsapp </a>
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
