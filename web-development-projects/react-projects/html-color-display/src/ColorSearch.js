import React from 'react'
import colorNames from 'colornames'

const ColorSearch = ( { colorValue,  setColorValue, setHexValue, isDarkText, setIsDarkText } ) => {
  return (
    <form className='searchColor' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Add Color Name</label>
        <input
         autoFocus
         type='text'
         placeholder='Add color name'
         value={colorValue}
         onChange={(e) => {
            setColorValue(e.target.value)
            setHexValue(colorNames(e.target.value))
        }}
         />
         <button
          type='button'
          onClick={() => setIsDarkText(!isDarkText)}>
          Toggle Text Color
         </button>

    </form>
  )
}

export default ColorSearch
