import AboutImage from '../../assets/about.jpg'
import './about.css'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__profile">
          <div className="about__image">
            <img src={AboutImage} alt="Imagem de Mateus Gabriel" />

          </div>
          <div className="about__text">
            <h3>Sobre mim</h3>
            <p>Meu nome é Mateus Gabriel tenho 30 anos, apaixonado por tecnologia e sempre atento as modernidades do mercado. Com mais de 5 anos de experiência como desenvolvedor Freelancer meu foco são nas tecnologias web e mobile, utilizando as mais modernas linguagens de programação. Meu trabalho consiste em qualidade, performance, responsividade e dinamismo.</p>
            <div className="header__button">
              <a href='https://www.instagram.com/mateus_io_/' target="_blank" className='btn__header'> Instagram </a>
              <a href='mailto:mateus92.mgs@gmail.com' target="_blank" className='btn__header'> E-mail </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About