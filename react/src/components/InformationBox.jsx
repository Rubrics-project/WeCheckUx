import React from 'react'
import infoIcon from "../assets/infoCircle.svg"

export default function InformationBox({text}) {
  return (
    <>
      <img className='p-3' src={infoIcon}alt="information icon"/>
      <p className='text-sm'>{text}</p>
    </>
  )
}
