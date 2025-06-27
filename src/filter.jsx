function Filter({ filter, closeFilter }) {
  return (
    <div className="filterDiv" >

      <ul>
        <li><a onClick={() => { filter('aToz'); closeFilter(false) }}>A-Z</a></li>
        <li><a onClick={() => { filter('ranking'); closeFilter(false) }}>Ranking</a></li>
        <li><a onClick={() => { filter('latest'); closeFilter(false) }}>Latest</a></li>
      </ul>

    </div>

  )
}

export default Filter