import "./MoviesGrid.scss"
import type { Movie } from "../../types"
import { MovieCard } from "../MovieCard/MovieCard"
import { BASE_POSTER_PATH } from "../../API/API-reference"
import { MovieCardSkeleton } from "../MovieCardSkeleton/MovieCardSkeleton"
import { LoadMoreButton } from "../LoadMoreButton/LoadMoreButton"


interface Props {
    movies: Movie[] | null
    loading: boolean
    loadMoreButton: boolean
    getMoreMovies: () => void
}

export const MoviesGrid: React.FC<Props> = ({ movies, loading, loadMoreButton, getMoreMovies }) => {
    
    return (
        <section className="movies__grid section-container">
            {
                movies !== null && movies.map((movie: Movie) => (
                    <MovieCard
                        movieTitle={movie.title}
                        image={(movie.poster_path) ? `${BASE_POSTER_PATH}${movie.poster_path}` : "no"}
                        raiting={movie.vote_average}
                        key={movie.id}
                    />
                ))
            }
            {
                loading && Array.from({ length: 20 }).map((_, index) => <MovieCardSkeleton key={index} />)
            }
            {
                (loadMoreButton && !loading) && <LoadMoreButton fetchMore={getMoreMovies} />
            }
        </section>
    )
}
