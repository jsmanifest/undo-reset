import React from 'react'
import cx from 'classnames'
import female from './images/female.jpg'
import male from './images/male.jpg'

const isEqual = (currProps, nextProps) => currProps.name === nextProps.name

const FriendBox = React.memo(
  ({ gender, ...props }) => (
    <div
      className={cx('box', {
        'teal-border': gender === 'Male',
        'hotpink-border': gender === 'Female',
      })}
      {...props}
    />
  ),
  isEqual,
)

const Friends = ({ friends }) => (
  <div className='boxes'>
    {friends.map(({ name, gender }, index) => (
      <FriendBox key={`friend_${index}`} gender={gender}>
        <div className='box-name'>Name: {name}</div>
        <div className='gender-container'>
          <img src={gender === 'Female' ? female : male} alt='' />
        </div>
      </FriendBox>
    ))}
  </div>
)

export default Friends
