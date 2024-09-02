import React from 'react'
import { usePopulerMoviesQery } from '../../../../hooks/usePopulerMovies'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Alert from 'react-bootstrap/Alert';
import MovieCard from '../MovieCard/MovieCard';
import "./PopulerMovieSlide.css"

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

const PopulerMovieSlide = () => {

    const {data, isLoading, isError, error}= usePopulerMoviesQery()

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <Alert variant='danger'>{error.message}</Alert>
        );
    }

  return (
    
    <div>
        <h3 className='title'>PopulerMovies</h3>
        <Carousel
            infinite={true}
            centerMode={true}
            itemClass="movie-slider p-1"
            containerClass="carousel-container"
            responsive={responsive}
            >
            {data.results.map((movie,index)=><MovieCard movie={movie} key={index}/>)}
        </Carousel>;

    </div>

  )
}

export default PopulerMovieSlide