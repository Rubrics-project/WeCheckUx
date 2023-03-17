import React from 'react'

export default function ButtonSecondaryIconSmall({ text, src }) {
  return (
    <div>

      <img className='mr-2' src={src} />
      <button className=" font-opencustom text-color-grey-title font-bold bg-color-grey-bg  flex px-3 py-1 border-color-grey-border  border border-solid rounded-md ">

        {text}
      </button>
    </div>
  )
}
