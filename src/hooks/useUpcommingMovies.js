import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpcommingMovies=()=>{
    return api.get(`/movie/upcoming`)
}

export const useUpcommingMoviesQery=()=>{
    return useQuery({
        queryKey:['movie-upcoming'],
        queryFn:fetchUpcommingMovies,
        select:(result)=>result.data
    })
}
