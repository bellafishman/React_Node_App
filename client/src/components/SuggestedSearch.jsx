import React from 'react'

export default function SuggestedSearch({ setSearchValue, handleApiSearch }) {
    const suggestedSearches = ['Creatine', 'Protein Intake on Muscle Growth', 'Resistance Training', 'Muscle Growth', 'Muscle Endurance'];
    
    return (
        <div className="suggested-search">
            {
                // map suggested search vals to one button each
                // each need unique key -- index!
            }
            {suggestedSearches.map((searchTerm, index) => (
                <button key={index} 
                    onClick={() => {
                        setSearchValue(searchTerm);
                        handleApiSearch(searchTerm);
                    }} 
                    className='search-1'>
                    {searchTerm}
                </button>
            ))}
        </div>
  )
}
