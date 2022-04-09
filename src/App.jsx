// import { MoviesGrid } from "./comonentes/MoviesGrid"
import styles from './estilos/App.module.css'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from './comonentes/MovieDetails';
import { LandingPage } from './comonentes/LandingPage';

export function App() {
  return (
    
  <Router>
    <header>
      <Link to='/'>
        <h1 className={styles.title}>Movies</h1>  
      </Link>
      
    </header>
    <main>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </main>
  </Router>
    
  )
};
