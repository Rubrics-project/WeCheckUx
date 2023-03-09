import React from 'react'

export default function ButtonSecondaryIconData({ text, onClick }) {
  return (
    <button className= " font-opencustom text-color-grey-title font-bold bg-color-grey-bg  flex px-3 py-1 border-color-grey-border  border border-solid rounded-md ">
    <img className='mr-2' src="../../public/assets/eyeIcon.svg" alt="eye icon" />

{text}
</button>
  )
}
