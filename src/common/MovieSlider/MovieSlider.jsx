import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import './MovieSlider.css';

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div className='slider-cotainer'>
      <h3 className='title'>{title}</h3>
      <Carousel
        draggable={true}
        centerMode={false}
        responsive={responsive}
        infinite={true}
        itemClass='movie-slider p-1'
        containerClass='carousel-container'
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;