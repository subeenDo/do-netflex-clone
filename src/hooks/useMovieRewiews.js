import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieReviews = async (movie_id) => {
    const response = await api.get(`/movie/${movie_id}/reviews`);
    return response.data; 
};

export const useMovieRewiewsQuery = (movie_id) => {
  return useQuery({
    queryKey: ['movie-reviews', movie_id],
    queryFn: () => fetchMovieReviews(movie_id),
    staleTime: 300000,
  });
};
