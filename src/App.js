import { Switch, Route } from 'react-router-dom';

import AppBar from './components/AppBar';
import HomePage from './views/Homepage';
import MoviesPage from './views/MoviesPage';
import NotFound from './views/NotFound';

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
