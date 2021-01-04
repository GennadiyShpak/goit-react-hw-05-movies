import { Switch, Route } from 'react-router-dom';

import AppBar from './components/AppBar';
import HomePage from './views/Homepage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFound from './views/NotFound';

function App() {
  return (
    <>
      <AppBar />
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
    </>
  );
}

export default App;
