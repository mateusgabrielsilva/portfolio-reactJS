import './card-portfolio.css';

//import data com json 
// import Card

/* 
    {
        data.map(item => (
            <Card key={item.id} className="about__card">
                <span>{item.icon}</span>
            </Card>
        ))
    }
*/

const CardPortfolio = ({children, className, onClick}) => {
    return (
      <article className={`card_portfolio ${className}`} onClick={onClick}>
          {children}
      </article>
    )
  }
  
  export default CardPortfolio