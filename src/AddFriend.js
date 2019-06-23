import React from 'react'

const AddFriend = ({
  currentValues,
  onSubmit,
  onNameChange,
  onGenderChange,
}) => (
  <div>
    <h3>Add a friend</h3>
    <form className='form' onSubmit={onSubmit}>
      <div>
        <input
          onChange={onNameChange}
          value={currentValues.name}
          type='text'
          name='name'
          placeholder="Friend's Name"
        />
      </div>
      <div>
        <select
          onChange={onGenderChange}
          name='gender'
          value={currentValues.gender}
        >
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Other'>Other</option>
        </select>
      </div>
      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  </div>
)

export default AddFriend
