import Card from './../../components/Card';
import data from './data';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contato</h2>
      <p>Fique a vontade para entrar em contato comigo, será um prazer atende-lo.</p>
      <div className="container contact__container">
        <div className="card__contact">
          {
            data.map(item => (
              <Card key={item.id}>
                <div className="service__icon">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
                <a href={item.link} target="_blank">Envie uma mensagem</a>
              </Card>
            ))
          }
        </div>

        <div className="form__contact">
          <form action="" method="post">
            <input type="text"  placeholder='Seu nome completo'/>
            <input type="email"  placeholder='Seu email'/>
            <textarea placeholder='Sua mensagem' cols="30" rows="10"></textarea>
            <a href="#">Enviar</a>
          </form>
        </div>
      </div>
      </section>
  )
}

export default Contact