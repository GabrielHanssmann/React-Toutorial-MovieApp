
import { MovieCard } from './MovieCard';
import styles from '../estilos/MovieGrid.module.css';
import { useEffect, useState } from 'react';

export function MoviesGrid() {

    // Llamada a servidor con hooks y el metodo fetch
    // let movies = [];
    // estado para que se actualicen los datos de la variable movies, movieStates devielve un array
    const [movies, setMovies] = useState([]);

    useEffect(() => [
        // fetch es una promesa
        fetch('https://api.themoviedb.org/3/discover/movie',{ 
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGE3YmYxOThmMTRjZmQxNWZiNDUxMmEwYTI4MjIzYiIsInN1YiI6IjYyNTAyNDYxYjZjMjY0MDA1MDA2MGYzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H3KCbHl8UjpLxKtEyoIKhqKle3TK8aMPoZuJ9XjuWYE',
            'Content-Type': 'application/json;charset=utf-8'
        }})
        .then((result) => result.json())
        .then((data) => {
            setMovies(data.results)
        })
    ]);

    return(
        <ul className={styles.moviesGrid}>
          {movies.map( (movie) => (
              <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
    )
}