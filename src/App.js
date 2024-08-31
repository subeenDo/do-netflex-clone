import AppLayout from './layout/AppLayout';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import Movieepage from './pages/Movies/Movieepage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';

// 홈페이지 /
//영화 전체 보여주는 페이지(서치) /movies?q=서치내용
//영화 디테일 페이지 /movies/:id
//추천영화 페이지 /movies/:id/recommandation
//리뷰 /movies/:id/reviews

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout/>}> //user화면
          <Route index element={<Homepage/>}/>
          <Route path="movies">
            <Route index element={<Movieepage/>}/>
            <Route path=":id" element={<MovieDetail/>}/>
          </Route>
        </Route>

        <Route path='*' element={<NotFoundPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
