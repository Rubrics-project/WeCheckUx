import React from 'react';
import browserIcon from "../assets/browserIcon.svg";
import { useMemo, useState } from 'react';
import { createAutocomplete } from '@algolia/autocomplete-core'

export default function Browser(props) {
  const[autocompleteState, setAutocompleteState] = useState({
      collections: [],
      isOpen: false
  })

  const autocomplete = useMemo(() => createAutocomplete({
    onStateChange: ({ state }) => setAutocompleteState(state),
    getSources: () => [{
      souceId: 'rubrics-api',
      getItems: ({ query }) => {
        if (!!query) {
          return fetch (`/api/search?q=´${query}`)
            .then(res => res.json())
        }

      }
    }]
  }), [props])
  
  return (
    <form className= 'my-5 mb-50 flex justify-center'>
        <div className='flex relative p-0.5 bg-color-grey-border rounded w-full'>
            <input className='flex-1 p-2 pl4  w-full' type='text' placeholder='Buscar...'/>
            <button className='flex items-center p-0.5 bg-white align-center'>
              <img className='fill-current w-6' src={browserIcon} alt="Browser Icon"></img>
            </button>
        </div>
    </form>
  )
}



