
export const CATEGORY ={
    movie:'movie',
    tv:'tv'
} as const;

export type Category = keyof typeof CATEGORY
 
export const MOVIE_TYPES = {
    upcoming:'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
}as const;

export type MovieType = keyof typeof MOVIE_TYPES

export const TV_TYPES = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}as const;

export type TvType = keyof typeof TV_TYPES