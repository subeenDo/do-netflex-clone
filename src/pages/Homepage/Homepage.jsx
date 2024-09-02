import React from 'react'
import Banner from './components/Banner/Banner'
import PopulerMovieSlide from './components/PopulerMovieSlide/PopulerMovieSlide'
import TopRated from './components/TopRated/TopRated'
import Upcomming from './components/Upcomming/Upcomming'

//1. 베너 = populer영화를 들고와서 첫번째 아이템을 보여주자
//2. populer movie
//3. top rated movie
//4. upcomming movie

const Homepage = () => {
  return (
    <div>
      <Banner/>
      <PopulerMovieSlide/>
      <TopRated/>
      <Upcomming/>
    </div>
  )
}

export default Homepage