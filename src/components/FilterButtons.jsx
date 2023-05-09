import React from 'react'
import FilterButton from './FilterButton'
import './FilterButtons.scss';

function FilterButtons({filter, handleClick}) {
  return (
    <div className='filter-buttons'>
            <FilterButton
            label="All"
            isActive={filter === 'all'}
            handleClick={() => handleClick('all')}
            />
            <FilterButton
            label="Active"
            isActive={filter === 'active'}
            handleClick={() => handleClick('active')}
            />
            <FilterButton
            label="Done"
            isActive={filter === 'done'}
            handleClick={() => handleClick('done')}
            />
    </div>
  )
}

export default FilterButtons
