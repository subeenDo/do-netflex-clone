import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetail = async (movie_id) => {
    const response = await api.get(`/movie/${movie_id}`);
    return response;
};

export const useMovieDetailQuery = (movie_id) => {
  return useQuery({
    queryKey: ['movie-detail', movie_id], 
    queryFn: () => fetchMovieDetail(movie_id), 
    select: (result) => result.data, 
    staleTime: 300000,
  });
};