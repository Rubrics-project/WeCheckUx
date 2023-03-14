import React from 'react';
import browserIcon from "../assets/browserIcon.svg";


export default function Browser() {
  return (
    <form className= 'flex justify-center mb-50'>
        <div className='flex relative p-0.5 bg-color-grey-title rounded w-2/6'>
            <input className='flex-1 p-2 pl4 rounded w-full' type='text' placeholder='Buscar...'/>
        </div>
    </form>
  )
}



