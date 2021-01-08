import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

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
const NotFound = lazy(() =>
  import('./views/NotFound.js' /* webpackChunkName: "not-fond-page" */),
);

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Loading</h1>}>
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

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
