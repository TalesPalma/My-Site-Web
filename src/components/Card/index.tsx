import "./Card.css"
interface CardProps {
    title: string,
    content: string
}


const Card = (card: CardProps) => {
    return (
        <div className="card">
            <div className="container">
                <h4><b>{card.title}</b></h4>
                <p>{card.content}</p>
            </div>
        </div>
    )
}

export default Card;