import React from 'react'
import './DeleteDoneButton.scss';

function DeleteDoneButton({handleClick, tasks}) {
  return (
            <button className='delete-done-button' onClick={() => handleClick(tasks.status)}>Delete Completed</button>
  )
}

export default DeleteDoneButton

