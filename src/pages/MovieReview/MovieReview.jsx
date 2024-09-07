import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieRewiewsQuery } from '../../hooks/useMovieRewiews';
import Button from 'react-bootstrap/Button';
import "./MovieReview.css";

const MovieReview = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieRewiewsQuery(id);

  const [expanded, setExpanded] = useState({}); // 각 리뷰의 확장 상태를 저장

  if (isLoading) {
    return <div>리뷰 로딩 중...</div>;
  }

  if (isError) {
    return <div>리뷰를 가져오는 중 오류가 발생했습니다: {error.message}</div>;
  }

  if (!data || !data.results || data.results.length === 0) {
    return <div>리뷰가 없습니다.</div>;
  }

  const handleToggle = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="movie-reviews">
      <h2 className='review-title'>Reviews</h2>
      {data.results.map((review, index) => (
        <div key={index} className="review-item">
          <h3>👤 {review.author}</h3>
          <p>
            {expanded[index]
              ? review.content
              : review.content.length > 300
              ? review.content.substring(0, 300) + '...'
              : review.content}
          </p>
          {review.content.length > 300 && (
            <div className="btn-container">
              <Button 
                variant="outline-danger"
                onClick={() => handleToggle(index)}>
                {expanded[index] ? 'Read Less' : 'Read More'}
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieReview;
