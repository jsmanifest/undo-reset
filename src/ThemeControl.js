import React from 'react'

const ThemeControl = ({ theme, onChange }) => (
  <div>
    <h3>What theme would you like to display?</h3>
    <div>
      <select onChange={onChange} name='theme' value={theme}>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
    </div>
  </div>
)

export default ThemeControl
