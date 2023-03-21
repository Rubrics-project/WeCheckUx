import React from 'react'
import infoIcon from "../assets/infoCircle.svg"

export default function InformationBox({text}) {
  return (
    <div classname='flex flex-row'>
      <img className='p-3 basis-0' src={infoIcon} alt="information icon"/>
      <p className='basis-0 text-sm'>{text}</p>
    </div>
  )
}
