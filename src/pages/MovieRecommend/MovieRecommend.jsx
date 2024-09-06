import React from 'react'

import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../common/MovieSlider/MovieSlider';
import { responsive } from '../../constants/responsive';
import SyncLoader from 'react-spinners/SyncLoader';
import { useRecommendMovieQuery } from '../../hooks/useRecommendMovie';



const MovieRecommend = ({ movieId }) => {

    const {data, isLoading, isError, error}= useRecommendMovieQuery(movieId);
console.log("ddd",data);
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
        <MovieSlider title='' movies={data.results} responsive={responsive}/>
    </div>

  )
}

export default MovieRecommend