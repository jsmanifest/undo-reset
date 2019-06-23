import React from 'react'

const UndoResetControl = ({ undo, reset }) => (
  <div>
    <h3>Made a mistake?</h3>
    <div className='undo-actions'>
      <div>
        <button type='button' onClick={undo}>
          Undo
        </button>
      </div>
      <div>
        <button type='button' onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  </div>
)

export default UndoResetControl
