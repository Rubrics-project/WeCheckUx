import React from 'react';
import browserIcon from "../assets/browserIcon.svg";
import { useState } from 'react';
import { createAutocomplete } from '@algolia/autocomplete-core'

export default function Browser() {
  const[autocompleteState, setAutocompleteState] = useState({
      collections: [],
      isOpen: false
  })

  const autocomplete = createAutocomplete({
    onStateChange: ({ state }) => setAutocompleteState(state),
    getSources: () => [{
      souceId: 'offers-next-api',
      getItems: ({ query }) => {
        if (!!query) {
          return fetch (`/api/search?q=´${query}`)
            .then(res => res.json())
        }

      }
    }]
  })
  
  return (
    <form className= 'flex justify-center mb-50'>
        <div className='flex relative p-0.5 bg-color-grey-title rounded w-2/6'>
            <input className='flex-1 p-2 pl4 rounded w-full' type='text' placeholder='Buscar...'/>
        </div>
    </form>
  )
}



