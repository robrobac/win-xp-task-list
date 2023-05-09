import React from 'react'

function FilterButton({label, isActive, handleClick}) {
  return (
    <button className={isActive ? "active" : ""} onClick={handleClick}>
        {label}
    </button>
  )
}

export default FilterButton
