import React from 'react'


const IconGenerator = ({ _iconName }) => {
    
  return (
    <img className="icon" src={process.env.PUBLIC_URL +'/Icons/' + _iconName + '.png'}/>
  )
}

export default IconGenerator