import React from "react";
import HeroSlide from "../components/hero-slide/HeroSlide";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import MovieList from "../components/movie-list/MovieList";
import { CATEGORY, MOVIE_TYPES, TV_TYPES } from "../types/tmdbTypes";
import TVList from "../components/tv-list/TVList";



const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <Button variant="outline" className="small">
                View more
              </Button>
            </Link>
          </div>
          <MovieList category={CATEGORY.movie} type={MOVIE_TYPES.popular} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <Button variant="outline" className="small">
                View more
              </Button>
            </Link>
          </div>
          <MovieList category={CATEGORY.movie} type={MOVIE_TYPES.top_rated} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to="/tv">
              <Button variant="outline" className="small">
                View more
              </Button>
            </Link>
          </div>
          <TVList category={CATEGORY.tv} type={TV_TYPES.popular} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to="/tv">
              <Button variant="outline" className="small">
                View more
              </Button>
            </Link>
          </div>
          <TVList category={CATEGORY.tv} type={TV_TYPES.top_rated} />
        </div>
      </div>
    </>
  );
};

export default Home;
