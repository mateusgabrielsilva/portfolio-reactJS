import CardPortfolio from '../../components/CardPortfolio';
import data from './data';
import './portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <p>Meus trabalhos recentes</p>
      <div className="container portfolio__container">
        {
          data.map(item => (
            <CardPortfolio key={item.id} className="portfolio__card">
                <img src={item.img} alt="" />
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
                <h6>{item.tecnology}</h6>
                <a href={item.link} target='_blank'>Visualizar</a>
            </CardPortfolio>
        ))
        }
      </div>
      </section>
  )
}

export default Portfolio