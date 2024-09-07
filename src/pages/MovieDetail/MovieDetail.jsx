import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css'; 
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { useMovieVideoQuery } from '../../hooks/useMovieVideo';
import Badge from 'react-bootstrap/Badge';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import SyncLoader from 'react-spinners/SyncLoader';
import Alert from 'react-bootstrap/Alert';
import MovieReview from '../MovieReview/MovieReview';
import MovieRecommend from '../MovieRecommend/MovieRecommend';

const MovieDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  const { data: videoData, isLoading: isVideoLoading, isError: isVideoError } = useMovieVideoQuery(id);
  
  const [showModal, setShowModal] = useState(false);

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

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const trailerKey = videoData?.results?.find(video => video.type === 'Trailer')?.key;

  return (
    <div className="movie-detail-container">
      <Container>
        <Row>
          <Col md={4}>
            <div className="movie-poster">
              <img
                src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`}
                alt={data.title}
              />
            </div>
          </Col>
          <Col md={8}>
            <div className="movie-info">
              <h1>{data.title}</h1>
              <p>
                {data.genres.map((genre, index) => (
                  <Badge key={index} bg="danger" className="me-2">
                    {genre.name}
                  </Badge>
                ))}
              </p>
              <p><strong>👍 </strong> {data.vote_average}</p>
              <p><strong>❤️ </strong> {data.popularity}</p>
              <p><strong>💲 </strong> ${data.budget.toLocaleString()}</p>
              <p><strong>📆 </strong> {data.release_date}</p>
              <p>{data.overview}</p>
              <p>
                <Button variant="outline-danger" onClick={handleShow}>
                  Video
                </Button>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <MovieRecommend movieId={id} />
        </Row>
        <Row>
          <MovieReview />
        </Row>
      </Container>

      {/* 모달 컴포넌트 */}
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isVideoLoading ? (
            <div>Video Loading ...</div>
          ) : isVideoError ? (
            <div>예고편을 가져오는 중 오류가 발생했습니다.</div>
          ) : trailerKey ? (
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                allowFullScreen
                title="Movie Trailer"
              />
            </div>
          ) : (
            <div>예고편이 없습니다.</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieDetail;
