import React from 'react'

export default function ButtonPrimaryIconBig({ text, onClick }) {
  return (
    <button
      className="font-opencustom text-color-blue-s font-bold text-base px-2.5 py-2 bg-color-grey-bg border border-color-grey-border-btn border-solid rounded-md flex "
      onClick={onClick}
    >
      <img className='mr-2' src="../../assets/addIcon.svg" alt="add icon" />
      {text}
    </button>
  )
}
