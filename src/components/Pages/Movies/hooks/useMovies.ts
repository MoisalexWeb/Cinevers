import { useEffect, useState } from "react"
import type { Genre, Movie } from "../../../../types"
import { getMovieGenres, getMovies } from "../../../../API/fetchData"


export const useMovies = () => {
    const initialPage = 1
    const [genres, setGenres] = useState<Genre[] | null>(null)
    const [movies, setMovies] = useState<Movie[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [nextPage, setNextPage] = useState<number>(1)
    const [loadMoreBtn, setLoadMoreBtn] = useState<boolean>(false)

    // Getting the genres
    const getGenres = () => {
        getMovieGenres()
            .then(response => {
                // console.log(response)
                if (response?.data) {
                    // console.log(response.data.genres)
                    setGenres(response.data.genres)
                }
            }).catch(error => {
                console.log(error)
            })
    }


    // Fetching the movies
    const getFeedMovies = ({ page }: { page: number }) => {
        setLoading(true)
        getMovies({
            page: page
        })
            .then(response => {
                console.log(response)
                if (response?.data) {
                    // console.log(response.data)
                    if (movies === null) {
                        setMovies(response.data.results)
                    } else {

                        setMovies(prevMovies => {
                            // Filtramos las nuevas películas para asegurarnos de que no estén ya en prevMovies
                            const newUniqueMovies = response.data.results.filter(
                                (newMovie: Movie) =>
                                    !prevMovies!.some((prevMovie: Movie) => prevMovie.id === newMovie.id)
                            );
                            // Concatenamos las películas previas con las nuevas películas únicas
                            return [...prevMovies!, ...newUniqueMovies];
                        });
                    }

                    if (response.data.total_pages > response.data.page) {
                        const nextPageNumber = response.data.page + initialPage
                        setNextPage(nextPageNumber)
                        setLoadMoreBtn(true)
                    } else {
                        setLoadMoreBtn(false)
                    }
                }
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getGenres()
        getFeedMovies({
            page: initialPage
        })
    }, [])

    // For fetch videos on click on load more button
    const fetchMoreVideos = () => {
        getFeedMovies({
            page: nextPage
        })
    }


    return {
        genres,
        loading,
        movies,
        getFeedMovies,
        nextPage,
        loadMoreBtn,
        fetchMoreVideos
    }
}
