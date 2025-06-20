// --- Interfaces para una película individual ---
export interface Movie {
    adult: boolean;
    backdrop_path: string | null; // Puede ser null si no hay imagen de fondo
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null; // Puede ser null si no hay póster
    release_date: string; // Formato 'YYYY-MM-DD'
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface TVSerie {
    adult: boolean;
    backdrop_path: string | null; // Puede ser null si no hay imagen de fondo
    genre_ids: number[];
    id: number;
    origin_country: string[]
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string | null; // Puede ser null si no hay póster
    first_air_date: string; // Formato 'YYYY-MM-DD'
    name: string;
    vote_average: number;
    vote_count: number;
}

// --- Interface para las fechas (común a ambas respuestas) ---
export interface Dates {
    maximum: string; // Formato 'YYYY-MM-DD'
    minimum: string; // Formato 'YYYY-MM-DD'
}

// --- Interface para la respuesta completa de películas en cartelera ---
export interface NowPlayingMoviesResponse {
    dates: Dates;
    page: number;
    results: Movie[]; // Un array de objetos Movie
    total_pages: number;
    total_results: number;
}

// --- Interface para la respuesta completa de próximos estrenos ---
// ¡Es la misma estructura que NowPlayingMoviesResponse!
export interface UpcomingMovies {
    dates: Dates;
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

// Movies genres 
export interface Genre {
  id: number;
  name: string;
}