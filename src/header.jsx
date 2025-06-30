import { useState } from "react"
import Filter from "./filter";


function Header({ searchClicked, filterSelected }) {
  const [inputValue, setInputValue] = useState('')
  const [filterDisplay, setFilterDisplay] = useState(false)

  return (<>

    <div style={{ textAlign: 'center', backgroundColor: 'aqua', maxWidth: '60%', margin: '0 30%', position: 'relative' }}>
      <h1>All Movies Watch</h1>

    </div>

    <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'right' }}>
      <div style={{ display: 'flex', justifyContent: "space-between" }}>
        <div style={{ position: 'relative' }}>
          <button className="filterBut" onClick={() => { setFilterDisplay(!filterDisplay) }}>Filter ⬇ </button>
          {filterDisplay ? <Filter filter={filterSelected} closeFilter={setFilterDisplay} /> : null}

        </div>

        <input value={inputValue} style={{ width: '40%' }} onChange={(e) => { setInputValue(e.target.value); }} onKeyDown={() => { if (event.key === 'Enter') { searchClicked(inputValue); setInputValue('') } }}></input>
        <button onClick={() => { searchClicked(inputValue); setInputValue('') }}>Search</button>

      </div>



    </div>



  </>

  )


}

export default Header