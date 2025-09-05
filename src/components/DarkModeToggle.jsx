import React from 'react'

const DarkModeToggle = ({ isDark, onToggle }) => {
  return (
    <button onClick={onToggle}>
      {isDark ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle