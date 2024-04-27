import React from 'react'

const ColorDisplay = ( { colorValue, hexValue, isDarkText } ) => {
  return (
    <section className='square'
     style={{backgroundColor: colorValue,
             color: isDarkText ? "#000" : "#FFF"
    }}
     >
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p>

    </section>
  )
}

ColorDisplay.defaultProps = {
    colorValue: "Empty Color Value"
}

export default ColorDisplay
