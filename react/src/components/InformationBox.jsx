import React from 'react'

export default function InformationBox({text}) {
  return (
    <div>
      <img className='mr-2' src="../../assets/infoCircle.svg" alt="information icon" />
      <p>{text}</p>
    </div>
  )
}
