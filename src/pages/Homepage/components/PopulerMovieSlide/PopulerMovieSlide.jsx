import React from 'react'
import { usePopulerMoviesQery } from '../../../../hooks/usePopulerMovies'
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider.jsx';
import { responsive } from '../../../../constants/responsive';
import SyncLoader from 'react-spinners/SyncLoader';


const PopulerMovieSlide = () => {

    const {data, isLoading, isError, error}= usePopulerMoviesQery()

    if (isLoading) {
        return (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <SyncLoader color="#f92828" margin={5} size={15} />
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
       <MovieSlider title='Populer Movies' movies={data.results} responsive={responsive}/>
    </div>

  )
}

export default PopulerMovieSlide