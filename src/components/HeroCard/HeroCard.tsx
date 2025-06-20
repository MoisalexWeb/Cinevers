import "./HeroCard.scss"

interface Props {
    title: string
    image: string
}

export const HeroCard: React.FC<Props> = ({ title, image }) => {
    return (
        <div className="heroCard">
            <img src={image} alt={title} className="heroCard-bg" />

            <div className="heroCard__texts">
                <h2 className="heroCard__texts-title">{title}</h2>
                <button className="heroCard__texts-play">Play now</button>
            </div>
        </div>
    )
}
