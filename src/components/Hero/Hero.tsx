import "./Hero.scss"
import { HeroCard } from "../HeroCard/HeroCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useEffect, useState } from "react";
import { getMovieNowPlaying } from "../../API/fetchData";
import type { Movie } from "../../types";
import { BASE_BACKGROUND_PATH } from "../../API/API-reference";



export const Hero = () => {
    const [movies, setMovies] = useState<Movie[] | null>(null)


    useEffect(() => {
        getMovieNowPlaying()
            .then(response => {
                if (response?.data) {
                    setMovies(response.data.results)
                } else {
                    console.log(response)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <section className="hero">

            <div className="hero__container">
                {
                    movies === null && <p>Loading movies...</p>
                }

                {
                    movies != null &&
                    <>
                        <Swiper
                            className="swiper-container"
                            loop={true}
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false
                            }}
                            grabCursor={true}
                        >
                            {
                                movies.slice(0, 5).map((movie) => (
                                    <SwiperSlide key={movie.id}>
                                        <HeroCard
                                            title={movie.title}
                                            image={`${BASE_BACKGROUND_PATH}${movie.backdrop_path}`}
                                        />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </>
                }
            </div>
        </section>
    )
}
