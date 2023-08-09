"use client"

import { useState } from 'react'
import { SeacrhManuFacturer } from "."

const SearchBar = () => {

  const [manufacturer, setManufacturer]  = useState('')

  const handleSearch = () => {}
  
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SeacrhManuFacturer 
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />
        </div>
    </form>  
  )
}

export default SearchBar