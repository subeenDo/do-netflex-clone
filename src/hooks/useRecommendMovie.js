import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchRecommendMovie = async (movie_id) => {
    const response = await api.get(`/movie/${movie_id}/recommendations`);
    return response;
};

export const useRecommendMovieQuery = (movie_id) => {
  return useQuery({
    queryKey: ['movie-recommend', movie_id], 
    queryFn: () => fetchRecommendMovie(movie_id), 
    select: (result) => result.data, 
    staleTime: 300000,
  });
};


