import React from 'react'
import { useTopRatedMoviesQery } from '../../../../hooks/useTopRatedMovies';
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import SyncLoader from 'react-spinners/SyncLoader';

const TopRated = () => {

    const {data, isLoading, isError, error}= useTopRatedMoviesQery()

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
        <MovieSlider title='Top Rated Movies' movies={data.results} responsive={responsive}/>
    </div>

  )
}

export default TopRated