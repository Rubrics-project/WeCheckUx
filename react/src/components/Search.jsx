import React, { useState } from 'react';
import { getAllItems } from "../services/rubricService";

function SearchResults() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState('');

    const handleSearch = async () => {
        try {
            const response = await getAllItems(searchTerm);
            setResults(response);
        } catch (error) {
            console.error(error;)
        }
    };


    return (
        <form ref={formRef} className='my-5 mb-50 flex justify-center'>
            <div className='flex relative p-0.5 bg-color-grey-border rounded w-full'>

                <input ref={inputRef} className='flex-1 p-2 pl4  w-full' type='text' placeholder='Buscar...' type="text" onChange={e => setSearchTerm(e.target.value)} />
                <button className='flex items-center p-0.5 bg-white align-center' onClick={handleSearch}>
                    <img className='fill-current w-6' src={browserIcon} alt="Browser Icon"></img>
                </button>
                <ul>
                    {results.map(result => (
                        <li key={result.id}>{result.title}</li>
                    ))}
                </ul>
            </div>
        </form>



        /*         <div>
                    <input type="text" onChange={e => setSearchTerm(e.target.value)} />
                    <button onClick={handleSearch}>Search</button>
                    <ul>
                        {results.map(result => (
                            <li key={result.id}>{result.title}</li>
                        ))}
                    </ul>
                </div> */
    );
}



