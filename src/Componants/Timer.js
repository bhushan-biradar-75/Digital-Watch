import React from 'react'
import Button from './Buttons'
import TimerWatch from './TimerWatch'
import Lap from './Lap'
function Text() {
    
  return (
      <div className='container bg'>
    <TimerWatch/>
    <Lap/>
    <Button/>
    </div>
  )
}

export default Text