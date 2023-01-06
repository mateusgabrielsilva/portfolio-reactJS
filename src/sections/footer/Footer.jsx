import './footer.css';

const Footer = () => {

  const dataAtual = new Date()
  const anoAtual = dataAtual.getFullYear()

  return (
    <footer>
      <div className="footer__profile">
        <h6> Desenvolvido por <span>Mateus Gabriel</span> - {anoAtual}</h6>
      </div>
      </footer>
  )
}

export default Footer