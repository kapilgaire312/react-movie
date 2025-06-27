import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Header from './header'
import MovieCard from './movie-card'

function App() {
  const [count, setCount] = useState(0)
  const [movie, setMovie] = useState([])
  const [searchedItem, setSearchedItem] = useState('Spiderman')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${searchedItem}`)
      .then(res => res.json())
      .then(res => { console.log(res.description); getMovie(res.description) })
      .catch(err => console.log(err))

  }, [searchedItem])

  function getMovie(res) {
    setIsLoading(false)
    setMovie(res)

  }


  function search(value) {
    if (value === '') {
      return
    }
    setMovie([])
    setIsLoading(true)
    setSearchedItem(value)


  }

  function filterMovie(type) {
    const movieArray = [...movie]
    if (type === 'aToz') {
      movieArray.sort((a, b) => {
        if (a["#TITLE"] < b["#TITLE"])
          return -1
        if (a["#TITLE"] > b["#TITLE"])
          return 1
        return 0
      })



    }
    else if (type === 'ranking') {
      movieArray.sort((a, b) => {
        if (a["#RANK"] < b["#RANK"])
          return -1
        if (a["#RANK"] > b["#RANK"])
          return 1
        return 0
      })


    }
    else if (type === 'latest') {
      movieArray.sort((a, b) => {
        if (a["#YEAR"] < b["#YEAR"])
          return 1
        if (a["#YEAR"] > b["#YEAR"])
          return -1
        return 0
      })

    }
    setMovie(movieArray)

  }





  return (


    <>
      <Header searchClicked={search} filterSelected={filterMovie} />

      {isLoading ? <h3>Loading...</h3> : <h3>Showing Results for: {searchedItem} </h3>}



      <div>


        {movie?.map((item, index) => {

          return < MovieCard key={item["#IMDB_ID"]} movieName={item["#TITLE"]} moviePoster={item["#IMG_POSTER"]} movieId={item["#IMDB_ID"]} />

        })}



      </div>




    </>
  )
}

export default App
