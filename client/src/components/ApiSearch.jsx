import { useState } from 'react';

export default function ApiSearch(props) {

    const {handleApiSearch, searchValue, setSearchValue} = props
    
    return (
    <div className='searchContent'>
        <input className='search' value={searchValue} onChange={(e) => {
            setSearchValue(e.target.value)
        }} placeholder="Search Strength Science" />
        <button className='searchButton' onClick={() => {
            handleApiSearch(searchValue)
            /* reset input default to og value */
            setSearchValue('')
        }}>Search
        </button>
    </div>
    )
}
