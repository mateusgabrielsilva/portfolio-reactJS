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
            <p>Olá, sou Mateus, um apaixonado por tecnologia e entusiasta da Ciência da Computação. Com 30 anos de idade e natural de São José dos Campos-SP, desde cedo encontrei minha paixão no mundo digital.</p>
            <p>Minha jornada na área da tecnologia começou em 2015, e desde então, venho trilhando um caminho empolgante nesse universo em constante evolução. Com vasta experiência no desenvolvimento de soluções inovadoras, possuo habilidades tanto em linguagens de frontend como em backend, o que me permite criar produtos completos e funcionais.</p>
            <p>Atualmente, sou membro essencial de uma empresa do setor financeiro, onde atuo como desenvolvedor backend, utilizando a linguagem C# para criar sistemas robustos e seguros. Paralelamente, sou um freelancer dedicado, oferecendo meus serviços para o desenvolvimento de sites e sistemas web personalizados, ajudando meus clientes a concretizarem suas ideias e alcançarem seus objetivos digitais.</p>
            <p>Acredito que a tecnologia tem o poder de transformar o mundo e, por isso, dedico-me a estar sempre atualizado com as mais recentes tendências e práticas do mercado. Minha abordagem é focada na busca constante pela excelência, trabalhando com precisão, criatividade e comprometimento para alcançar os melhores resultados.</p>
            <p>Seja criando soluções que tornem o cotidiano mais simples ou contribuindo para o crescimento dos negócios por meio da tecnologia, estou sempre em busca de novos desafios que me permitam expandir meus conhecimentos e aprimorar minhas habilidades.</p>
            <p>Se você está em busca de um profissional confiável, proativo e apaixonado por tecnologia, estou aqui para ajudá-lo a transformar suas ideias em realidade. Vamos construir juntos um futuro digital brilhante!</p>
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