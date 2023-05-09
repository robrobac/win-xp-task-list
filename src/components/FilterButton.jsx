import React from 'react'
import './FilterButton.scss';

function FilterButton({label, isActive, handleClick}) {
  return (
    <button className={isActive ? "filter-button active" : "filter-button"} onClick={handleClick}>
        {label}
    </button>
  )
}

export default FilterButton
