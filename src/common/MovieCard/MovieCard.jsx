import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './MovieCard.css';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    return genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj?.name || '';
    });
  };

  const handleClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div
      style={{
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` +
          ')',
      }}
      className="movie-card"
      onClick={handleClick} 
    >
      <div className="overlay">
        <h2 className="movie-card-title">
          {movie.title.length > 55 ? movie.title.substring(0, 60) + '...' : movie.title}
        </h2>
        {showGenre(movie.genre_ids).map((genre, index) => (
          <Badge key={index} bg="danger">
            {genre}
          </Badge>
        ))}
        <div>👍 {movie.vote_average}</div>
        <div>❤️ {movie.popularity}</div>
        <div>{movie.adult ? '❗ over18' : '✅ under18'}</div>
      </div>
    </div>
  );
};

export default MovieCard;
