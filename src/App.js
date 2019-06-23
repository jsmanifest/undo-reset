import React, { useState } from 'react'
import cx from 'classnames'
import useApp from './useApp'
import ThemeControl from './ThemeControl'
import AddFriend from './AddFriend'
import UndoResetControl from './UndoResetControl'
import Friends from './Friends'
import './styles.css'

const App = () => {
  const { friends, theme, onSubmit, onThemeChange, undo, reset } = useApp()

  const [name, setName] = useState('')
  const [gender, setGender] = useState('Male')
  const onNameChange = (e) => setName(e.target.value)
  const onGenderChange = (e) => setGender(e.target.value)

  const resetValues = () => {
    setName('')
    setGender('Male')
  }

  return (
    <div
      className={cx({
        'theme-light': theme === 'light',
        'theme-dark': theme === 'dark',
      })}
    >
      <ThemeControl theme={theme} onChange={onThemeChange} />
      <AddFriend
        onSubmit={onSubmit({ name, gender }, resetValues)}
        onNameChange={onNameChange}
        onGenderChange={onGenderChange}
        currentValues={{ name, gender }}
      />
      <UndoResetControl undo={undo} reset={reset} />
      <Friends friends={friends} />
    </div>
  )
}

export default App
