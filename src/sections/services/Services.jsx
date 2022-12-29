import Card from '../../components/Card';
import data from './data';
import './services.css';

const Services = () => {
  return (
    <section id="services">
      <h2>Serviços</h2>
      <p>Eu te dou o melhor em todos os serviços abaixo</p>
      <div className="container services__container">
        {
          data.map(item => (
            <Card key={item.id}>
              <div className="service__icon">{item.icon}</div>
              <div className="services__details">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Services