import "./ButtonGenre.scss"

interface Props {
    genre: string
    genreId: number
    setState: (id: number) => void
    active: boolean
}

export const ButtonGenre: React.FC<Props> = ({ genre, genreId, setState, active }) => {

    const handleClick = () => {
        setState(genreId)
    }

    return (
        <button
            className={`genre-button ${active ? "active-genre" : ""}`}
            onClick={handleClick}
        >
            {genre}
        </button>
    )
}
