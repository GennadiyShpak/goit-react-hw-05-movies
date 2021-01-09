import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import AppBar from './components/AppBar';

const HomePage = lazy(() =>
  import('./views/Homepage.js' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /* webpackChunkName: "movie-detail-page" */
  ),
);

function App() {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <Loader type="BallTriangle" color="#000" height={180} width={180} />
        }
      >
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
