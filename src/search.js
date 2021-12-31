import React,{useState, useRef} from 'react'
import {useGlobalContext} from './context'

function Search() {

    const {searchItem, setSearchItem}  = useGlobalContext()
    const searchInput = useRef('')

    return (
      <div className="searchbar">
        <input type="text" placeholder='Search your favourite song'
         ref={searchInput} onChange={()=> setSearchItem(searchInput.current.value)}
         className='search'/>
         <button>Search</button>
     </div>
    )
}


export default Search 