import React from 'react'
import infoIcon from "../assets/infoCircle.svg"

export default function InformationBox({text}) {
  return (
    <div>
      <img className='mr-2' src={infoIcon} alt="information icon" />
      <p>{text}</p>
    </div>
  )
}
