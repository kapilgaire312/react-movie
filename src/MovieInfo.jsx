import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'

function MovieInfo({ movies }) {
  const { movieId } = useParams();
  console.log(movieId)
  const selectedMovie = movies.length === 0 ?

    JSON.parse(localStorage.getItem('lastMovie'))
    :
    movies.filter((item) => {
      console.log(item["#IMDB_ID"])
      if (item["#IMDB_ID"] === movieId) {
        return true
      }
      else false
    })

  console.log(selectedMovie)

  useEffect(() => {
    localStorage.setItem('lastMovie', JSON.stringify(selectedMovie))
  }, [selectedMovie])

  return (
    <>
      <p >
        <Link to="/" style={{ color: 'green', textDecoration: 'none' }}>Home</Link> /
        <Link style={{ color: 'green', textDecoration: 'none' }}> {selectedMovie[0]["#TITLE"]}</Link>
      </p>
      <div style={{ display: 'flex', columnGap: '2%' }}>
        <div style={{ width: '35%' }}>
          <img src={selectedMovie[0]["#IMG_POSTER"]} alt={selectedMovie[0]["#TITLE"] + '-image'} style={{ width: '100%' }}></img>

        </div>

        <div style={{ textAlign: 'left' }}>
          <h3>{selectedMovie[0]["#TITLE"]}</h3>
          <p>Release Date: {selectedMovie[0]["#YEAR"]}</p>
          <p>Starring: {selectedMovie[0]["#ACTORS"]}</p>


        </div>

      </div>
    </>

  )
}

export default MovieInfo