import "./Home.scss"
import { Hero } from "../../Hero/Hero"
import { CardSliderSection } from "../../CardSliderSection/CardSliderSection"
import { getUpcomingMovies, getPopularMovies, getTopRatedTV } from "../../../API/fetchData"
import { Discover } from "../../Discover/Discover"

export const Home = () => {
    return (
        <>
            <Hero />

            <CardSliderSection
                title="Upcoming Movies"
                link="/movies/upcoming-movies"
                fetchMovies={getUpcomingMovies}
                type="movie"
            />

            <CardSliderSection
                title="Popular Movies"
                link="/movies/popular"
                fetchMovies={getPopularMovies}
                type="movie"
            />

            <CardSliderSection
                title="Top Rated TV"
                link="/tvSeries/top-rated"
                fetchMovies={getTopRatedTV}
                type="serie"
            />

            <Discover />
        </>
    )
}
