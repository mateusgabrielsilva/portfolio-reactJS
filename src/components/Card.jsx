import './card.css'


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

const Card = ({children, className, onClick}) => {
  return (
    <article className={`card ${className}`} onClick={onClick}>
        {children}
    </article>
  )
}

export default Card