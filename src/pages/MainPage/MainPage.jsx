import React from 'react'
import './MainPage.css'
const MainPage = () => {
  return (
    <div classname="landing__pg_main">
      <h1>Drug Discovery </h1>
      <div className="drugs__cards__display">
        <form action="">
        <label>Smiles Notation for protein</label>
            <input type="text" />
            <label>Smiles notation of inhibitor</label>
            <input type="text" />            
            <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default MainPage
