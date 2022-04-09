import movie from '../movies.json';
import styles from '../estilos/MovieDetails.module.css';

export function MovieDetails() {

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <div className={styles.detalles}>
      <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
      <div className={styles.col}>
        <p><strong>Title:</strong> {movie.title}</p>
        <p>
          Generos: {movie.genres.map( genre => genre.name ).join(', ')}
        </p>
        <p className={styles.movieDetails}>Description: {movie.overview}</p>
        
      </div>
    </div>
  )
}