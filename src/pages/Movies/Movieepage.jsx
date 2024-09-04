import React, { useState, useEffect } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import "./Moviepage.css";
import SyncLoader from 'react-spinners/SyncLoader';

const Movieepage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });

  useEffect(() => {
    setPage(1);
  }, [keyword]);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

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
      <Container>
        <Row>
          <Col lg={4} xs={12}>
            필터
          </Col>
          <Col lg={8} xs={12}>
            <Row>
              {data?.results.length > 0 ? (
                data.results.map((movie, index) => (
                  <Col key={index} lg={4} xs={12}>
                    <MovieCard movie={movie} />
                  </Col>
                ))
              ) : (
                <Alert className="custom-alert">
                  {keyword ? `No results found for "${keyword}".` : "No movies found."}
                </Alert>
              )}
            </Row>
          </Col>
        </Row>
        {data?.results.length > 0 && (
          <div className="pagination-container">
            <ReactPaginate
              previousLabel="Previous"
              nextLabel="Next"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              pageCount={data?.total_pages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName="pagination"
              activeClassName="active"
              forcePage={page - 1}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Movieepage;
