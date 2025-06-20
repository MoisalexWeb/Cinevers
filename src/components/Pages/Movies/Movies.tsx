import "./Movies.scss"
import { ButtonGenre } from "../../ButtonGenre/ButtonGenre"
import { useMovies } from "./hooks/useMovies"
import type { Genre } from "../../../types"
import { useState } from "react"
import { MoviesGrid } from "../../MoviesGrid/MoviesGrid"


export const Movies = () => {
    const [currentGenre, setCurrentGenre] = useState<number | null>(null)
    const { genres, movies, loading, loadMoreBtn, getFeedMovies, nextPage } = useMovies()

    const fetchMoreVideos = () => {
        getFeedMovies({
            page: nextPage
        })
    }


    return (
        <>
            <section className="movies section-container">
                <h1 className="movies-title">Movies</h1>

                <div className="movies__genres">
                    {
                        genres !== null && genres.map((genre: Genre) => (
                            <ButtonGenre
                                genre={genre.name}
                                genreId={genre.id}
                                setState={setCurrentGenre}
                                key={genre.id}
                                active={currentGenre === genre.id}
                            />
                        ))
                    }
                </div>
            </section>

            <MoviesGrid
                movies={movies}
                loading={loading}
                loadMoreButton={loadMoreBtn}
                getMoreMovies={fetchMoreVideos}
            />
        </>
    )
}
