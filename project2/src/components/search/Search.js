import React from 'react'
import './Search.css'

const Search = ({ search }) => {
    return (

        <div className="grid" >

            <input className="search" type="text" placeholder="  Search your favourite food and press enter" onKeyPress={(e) => search(e)} />
            <h1>Breakfast</h1>
            <h1>Lunch</h1>
            <h1>Dinner</h1>
        </div>

    )
}

export default Search
