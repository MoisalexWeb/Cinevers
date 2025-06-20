import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmI2MjVkNGIxYTJiYWIwYmU5YzhlM2VmZTc3Zjk3OCIsIm5iZiI6MTc0OTc1NzYzMS41NDcwMDAyLCJzdWIiOiI2ODRiMmViZjFkNTMzOTcwNTExYmU1YTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.a_fOA4D5qYFRmcxfgqs8sbGXXtb2ES4smv0zF0eUhRE",
        "Content-Type": "application/json"
    }
})

// Movie now playing for Hero at home page
export const getMovieNowPlaying = async () => {
    try {
        const URL = "movie/now_playing?language=en-US&page=1"
        const response = await axiosInstance.get(URL)

        if (response.data) {
            return response
        }

    } catch (error) {
        console.log(error)
    }
}

export const getUpcomingMovies = async () => {
    try {
        const URL = "movie/upcoming"
        const response = await axiosInstance.get(URL)

        if (response.data) {
            return response
        }

    } catch (error) {
        console.log(error)
    }
}

export const getPopularMovies = async () => {
    try {
        const URL = "movie/popular"
        const response = await axiosInstance.get(URL)

        if (response.data) {
            return response
        }

    } catch (error) {
        console.log(error)
    }
}

export const getTopRatedTV = async () => {
    try {
        const URL = "tv/top_rated"
        const response = await axiosInstance.get(URL, {
            params: {
                page: 1
            }
        })

        if (response.data) {
            return response
        }

    } catch (error) {
        console.log(error)
    }
}


export const getMovieGenres = async () => {
    try {
        const URL = "genre/movie/list"
        const response = await axiosInstance.get(URL, {
            params: {
                page: 1
            }
        })

        if (response.data) {
            return response
        }

    } catch (error) {
        console.log(error)
    }
}


export const getMovies = async ({ page }: { page: number }) => {
    try {
        const URL = "discover/movie"
        const response = await axiosInstance.get(URL, {
            params: {
                page,
                sort_by: "popularity.desc"
            }
        })

        if (response.data) {
            return response
        }

    } catch (error) {
        console.log(error)
    }
}