import React, { useState, useEffect } from 'react'
import Autocomplete from 'react-autocomplete'
import axios from 'axios'
import useDebounce from './../hooks/useDebounce'

export default function AddressInput({ setAddr }) {
  const [query, setQuery] = useState('')
  const [items, setItems] = useState([])

  const debouncedQuery = useDebounce(query, 400)

  useEffect(() => {
    async function viaCEPRequest(query) {
      try {
        const { data } = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://viacep.com.br/ws/SP/Sao%20Paulo/${query.split(' ').join('+')}/json`)}`)
        setItems(
          Array.from(
            new Set(
              JSON.parse(data.contents)
                .map(x => x.logradouro)
                .filter(x => {
                  const array = x.split(' ')
                  return !Number(array[array.length-1])
                })
            )
          )
        )
      } catch(e) {
        console.log('axios error', e)
      }
    }
    
    if (debouncedQuery.length > 3) {
      viaCEPRequest(debouncedQuery)
    }
  }, [debouncedQuery])

  return (
    <Autocomplete
      getItemValue={item => item}
      items={items}
      value={query}
      onChange={e => setQuery(e.target.value)}
      onSelect={val => setAddr(val)}
      selectOnBlur={true}
      renderItem={(item, isHighlighted) =>
        <div key={'addr-' + items.findIndex(x => x === item)} className={`bg-${isHighlighted ? 'gray-200' : 'white'}`}>
          { item }
        </div>
      }
    />
  )
}