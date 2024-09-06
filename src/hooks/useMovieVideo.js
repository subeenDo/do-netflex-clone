import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieVideo = async (movie_id) => {
    const response = await api.get(`/movie/${movie_id}/videos`);
    return response.data; 
};

export const useMovieVideoQuery = (movie_id) => {
  return useQuery({
    queryKey: ['movie-videos', movie_id],
    queryFn: () => fetchMovieVideo(movie_id),
    staleTime: 300000,
  });
};
