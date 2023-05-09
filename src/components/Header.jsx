import React from 'react'

function Header() {
  return (
    <div className="title-bar">
        <div className="title-bar-text">Task Manager</div>
        <div className="title-bar-controls">
            <button aria-label="Help"></button>
            <button aria-label="Close"></button>
    </div>
    </div>
  )
}

export default Header