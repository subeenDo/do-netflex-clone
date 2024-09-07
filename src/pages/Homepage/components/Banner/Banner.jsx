import React from 'react'
import { usePopulerMoviesQery } from '../../../../hooks/usePopulerMovies'
import Alert from 'react-bootstrap/Alert';
import "./Banner.css"
import SyncLoader from 'react-spinners/SyncLoader';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const {data, isLoading, isError, error}= usePopulerMoviesQery()
    const navigate = useNavigate();
    
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

    const movie = data.results[0];
    const handleClick = () => {
      navigate(`/movies/${movie.id}`);
    };

    // Mobile 화면에서만 글자 수를 제한하는 로직
    const truncateText = (text, limit) => {
      if (window.innerWidth <= 768 && text.length > limit) {
        return text.slice(0, limit) + '...';
      }
      return text;
    };

  return (
    <div style={{
        backgroundImage:"url("+`https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data.results[0].poster_path}`+")",
        }}
        className='banner'
        onClick={handleClick} 
    >
        <div className='text-white banner-text-area'>
            <h1>{movie.title}</h1>
            <p>{truncateText(movie.overview, 100)}</p>
        </div>
    </div>
  )
}

export default Banner;
