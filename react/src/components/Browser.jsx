import React from 'react';
import { getAllItems } from '../services/rubricService.js';
import browserIcon from "../assets/browserIcon.svg";
import { useMemo, useRef, useState } from 'react';
import { createAutocomplete } from '@algolia/autocomplete-core'
import Link from 'next/link'

const autocompleteItem = ({ title, description }) => {
  return (
    <li>
      <Link href={`/detail/${id}`}>
        <a className='flex-gap4 p-4'>
          <div>
            <h3 className='text-sm font-semibold'>{title}</h3>
            <p className='text-xs text-color-grey-border-600'>{title}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default function Browser(props) {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  })

  const autocomplete = useMemo(() => createAutocomplete({
    placeholder: 'Buscar...',
    onStateChange: ({ state }) => setAutocompleteState(state),
    getSources: () => [{
      sourceId: 'rubrics-api',
      getItems: ({ query }) => {
        if (!!query) {
          return fetch(`/api/search?q=´${query}`)
            .then(res => res.json())
        }

      }
    }],
    ...props
  }), [props])

  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })
  const inpitProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  })

  return (
    <form ref={formRef} className='my-5 mb-50 flex justify-center'>
      <div className='flex relative p-0.5 bg-color-grey-border rounded w-full'>
        <input ref={inputRef} className='flex-1 p-2 pl4  w-full' type='text' placeholder='Buscar...'/>
        <button className='flex items-center p-0.5 bg-white align-center'>
          <img className='fill-current w-6' src={browserIcon} alt="Browser Icon"></img>
        </button>

      
        {
            autocompleteState.isOpen && (
              <div className='absolute top-0 left-0 bg-white border-color-grey-border rounded-lg shadow-lg z-10 overflow-hidden' ref={panelRef} {...
              autocomplete.getPanelProps()}>
              {autocompleteState.collections.map((collection, index) => 
              {
                const { items } = collection
                console.log({items})
                return (
                  <section key={`section-${index}`}>
                    {items.length > 0 && (
                      <ul {...autocomplete.getListProps()}>
                        {
                        items.map(item => <Autocomplete key={item.id} {...item} />)
                        }
                      </ul>
                    )}
                  </section>
                )
              })}
              </div>
            )
        }
      </div>
    </form>
  )
}



