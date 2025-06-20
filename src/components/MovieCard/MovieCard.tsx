import "./MovieCard.scss"
import defaultPoster from "/images/poster-default.svg"

interface Props {
    image: string
    movieTitle: string | undefined
    raiting: number
}

export const MovieCard: React.FC<Props> = ({ image, movieTitle, raiting }) => {
    const imagURL = (image) ? image : defaultPoster
    
    return (
        <div className="movieCard">
            <figure className="movieCard__figure">
                <img src={imagURL} alt={movieTitle} loading="lazy" className="movieCard__figure-img" />
                <span className="movieCard__figure-rating">{raiting.toFixed(1)}/10< i className='bx  bxs-star'></i></span>
            </figure>
            <h3 className="movieCard-title">{movieTitle}</h3>
        </div>
    )
}
