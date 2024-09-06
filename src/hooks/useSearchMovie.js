 import { useQuery } from "@tanstack/react-query";
 import api from "../utils/api";

// const fetchSearchMovie=({keyword, page})=>{
//     return keyword
//     ?api.get(`/search/movie?query=${keyword}&page=${page}`)
//     :api.get(`/movie/popular?page=${page}`);
// }


// export const useSearchMovieQuery=({keyword, page})=>{
//     return useQuery({
//         queryKey:['movie-search', {keyword, page}],
//         queryFn:()=>fetchSearchMovie({keyword, page}),
//         select:(result)=>result.data,
//     });
// }

const fetchSearchMovie = ({ keyword, genre, page, sortOption }) => {
    let url = `/movie/popular?page=${page}`;

    if (keyword) {
        url = `/search/movie?query=${encodeURIComponent(keyword)}&sort_by=${sortOption}&page=${page}`;
    } else if (genre) {
        url = `/discover/movie?with_genres=${genre}&sort_by=${sortOption}&page=${page}`;
    }

    return api.get(url);
};

  
export const useSearchMovieQuery = ({ keyword, genre, page, sortOption }) => {
    return useQuery({
        queryKey: ["movie-search", { keyword, genre, page, sortOption }],
        queryFn: () => fetchSearchMovie({ keyword, genre, page, sortOption }),
        select: (result) => result.data,
    });
};
