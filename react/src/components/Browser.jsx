import React from 'react';
import browserIcon from "../assets/browserIcon.svg";


export default function Browser() {
  return (
    <form>
        <div class='browser'>
            <input class= 'bg-color-grey-bg focus:ring-1 focus:ring-indigo-500 rounded-1xl p-2 mx-auto w-11/12 mt-3' type='text' placeholder='Buscar...'/>
        </div>
    </form>
  )
}



