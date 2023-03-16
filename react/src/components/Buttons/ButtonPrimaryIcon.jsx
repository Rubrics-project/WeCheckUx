import React from 'react'

export default function ButtonPrimaryIcon({ icon, text, onClick }) {
  return (
    <button
      className="font-opencustom text-color-blue-s font-bold text-sm px-2.5 py-1 bg-color-grey-bg border border-color-grey-border-btn border-solid rounded-md flex "
      onClick={onClick}
    >
      <img className='mr-2' src={icon} alt="edit icon" />
       
      {text}
    </button>
  )
}
