import React from 'react'
import { useUpcommingMoviesQery } from '../../../../hooks/useUpcommingMovies';
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import SyncLoader from 'react-spinners/SyncLoader';


const Upcomming = () => {

    const {data, isLoading, isError, error}= useUpcommingMoviesQery()

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
        <MovieSlider title='Upcomming Movies' movies={data.results} responsive={responsive}/>
    </div>

  )
}

export default Upcomming