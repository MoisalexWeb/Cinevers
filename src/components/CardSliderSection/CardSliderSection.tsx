import "./CardSliderSection.scss"
import { MovieCard } from "../MovieCard/MovieCard"
import { Link } from "wouter"
import { useEffect, useState } from "react"
import type { Movie, TVSerie } from "../../types"
import { BASE_POSTER_PATH } from "../../API/API-reference"
import { MovieCardSkeleton } from "../MovieCardSkeleton/MovieCardSkeleton"


interface Props {
    title: string
    link: string
    fetchMovies: () => Promise
    type: "movie" | "serie"
}


export const CardSliderSection: React.FC<Props> = ({ title, link, fetchMovies, type }) => {
    const [movies, setMovies] = useState<Movie[] | TVSerie[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)


    useEffect(() => {
        fetchMovies()
            .then(response => {
                console.log(response)
                if (response?.data) {
                    console.log(response.data.results)
                    setMovies(response.data.results)
                }
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])


    return (
        <section className="sliderSection section-container">
            <div className="sliderSection__title">
                <h2 className="sliderSection__title-title">{title}</h2>
                <Link className="sliderSection__title-link" href={link}>View more</Link>
            </div>

            <div className="sliderSection__content">
                {
                    (movies == null && loading) && Array.from({ length: 10 }).map((_, index) => <MovieCardSkeleton key={index} />)
                }
                {
                    (movies !== null && !loading) &&
                    <>
                        {
                            movies.slice(0, 20).map(movie => {
                                if (type === "movie") {
                                    const movieItem = movie as Movie
                                    return (
                                        <MovieCard
                                            key={movieItem.id}
                                            movieTitle={movieItem.title}
                                            raiting={movieItem.vote_average}
                                            image={`${BASE_POSTER_PATH}${movieItem.poster_path}`}
                                        />
                                    )
                                } else {
                                    const serieItem = movie as TVSerie
                                    return (
                                        <MovieCard
                                            key={serieItem.id}
                                            movieTitle={serieItem.name}
                                            raiting={serieItem.vote_average}
                                            image={`${BASE_POSTER_PATH}${serieItem.poster_path}`}
                                        />
                                    )
                                }
                            })
                        }
                    </>
                }
            </div>
        </section>
    )
}
