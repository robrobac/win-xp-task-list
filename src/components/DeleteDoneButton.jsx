import React from 'react'

function DeleteDoneButton({handleClick, tasks}) {
  return (
            <button onClick={() => handleClick(tasks.status)}>Delete Completed</button>
  )
}

export default DeleteDoneButton

