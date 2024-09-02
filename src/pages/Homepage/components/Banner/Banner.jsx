import React from 'react'
import { usePopulerMoviesQery } from '../../../../hooks/usePopulerMovies'
import Alert from 'react-bootstrap/Alert';
import "./Banner.css"

const Banner = () => {
    const {data, isLoading, isError, error}= usePopulerMoviesQery()
    console.log("ddd", data);
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
    <div style={{
        backgroundImage:"url("+`https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data.results[0].poster_path}`+")",
        }}
        className='banner'
    >
        <div className='text-white banner-text-area'>
            <h1>{data?.results[0].title}</h1>
            <p>{data?.results[0].overview}</p>
        </div>
    </div>
  )
}

export default Banner