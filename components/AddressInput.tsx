import React, { useState, useEffect } from 'react'
import Autocomplete from 'react-autocomplete'
import axios from 'axios'
import useDebounce from './../hooks/useDebounce'

export default function AddressInput({ setAddr, value }) {
  const [query, setQuery] = useState('')
  const [items, setItems] = useState([])

  const debouncedQuery = useDebounce(query, 200)

  useEffect(() => {
    async function viaCEPRequest(query) {
      try {
        const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://viacep.com.br/ws/SP/Sao%20Paulo/${query.split(' ').join('+')}/json`)}`)
        const data = JSON.parse(response.data.contents)
        setItems(
          Array.from(
            new Set(
              data
                .map(x => x.logradouro)
                .filter(x => {
                  const array = x.split(' ')
                  return !Number(array[array.length-1])
                })
            )
          )
        )
      } catch(e) {
        console.log('ADDR INPUT: request error')
      }
    }
    
    if ((debouncedQuery || '').length > 3) {
      viaCEPRequest(debouncedQuery)
    }
  }, [debouncedQuery])

  useEffect(() => {
    setQuery(value)
  }, [value])

  return (
    <Autocomplete
      getItemValue={item => item}
      items={items}
      value={query}
      onChange={e => setQuery(e.target.value)}
      onSelect={val => setAddr(val)}
      selectOnBlur={true}
      renderInput={props => 
        <input {...props} className="w-full" />
      }
      renderItem={(item, isHighlighted) =>
        <div key={'addr-' + items.findIndex(x => x === item)} className={`bg-${isHighlighted ? 'gray-200' : 'white'} p-2`}>
          { item }
        </div>
      }
    />
  )
}