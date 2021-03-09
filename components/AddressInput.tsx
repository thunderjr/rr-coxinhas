import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Autocomplete from 'react-autocomplete'

import useDebounce from './../hooks/useDebounce'
import Cart from './../types/Cart'
import { ViaCEPEntry, addressSearch } from './../services/viaCep'
import cities from './../cities.json'

function sanitizeResults(results : ViaCEPEntry[]) : ViaCEPEntry[] {
  const uniques = []
  results
    .filter(x => {
      const array = x.logradouro.split(' ')
      return !Number(array[array.length - 1])
    })
    .forEach(a => {
      const foundMatch : ViaCEPEntry = uniques.find(x => x.logradouro === a.logradouro && x.bairro === a.bairro)
      
      if (foundMatch) return
      if (a.logradouro === '') return
      
      uniques.push(a)
    })
  return uniques
}

export default function AddressInput({ setBairro }) {
  const dispatch = useDispatch()

  const [query, setQuery] = useState('')
  const [items, setItems] = useState([])

  const debouncedQuery = useDebounce(query, 200)

  const storeAddr = useSelector((state: Cart) => state.address?.endereco)
  const storeCity = useSelector((state: Cart) => state.address?.cidade)

  function setAddr(item) {
    dispatch({ 
      type: 'SET_ADDRESS',
      payload: {
        endereco: item.logradouro,
        bairro: item.bairro,
      }
    })
    setBairro(item.bairro)
  }

  useEffect(() => {
    setQuery(storeAddr)
  }, [storeAddr])

  useEffect(() => {
    async function viaCEPRequest(query) {
      try {
        const res = await addressSearch(storeCity, query)
        setItems(sanitizeResults(JSON.parse(res.data.contents)))
      } catch(e) {
        console.log('ADDR INPUT: request error')
      }
    }
    
    if ((debouncedQuery || '').length > 3) {
      viaCEPRequest(debouncedQuery)
    }
  }, [debouncedQuery])

  return (
    <Autocomplete
      getItemValue={item => item.logradouro}
      items={items}
      value={query}
      onChange={e => setQuery(e.target.value)}
      onSelect={(val, item) => setAddr(item)}
      selectOnBlur={true}
      renderInput={props => 
        <input {...props} className="w-full" />
      }
      renderItem={(item, isHighlighted) => 
        <div key={'addr-' + item.logradouro + item.bairro} className={`bg-${isHighlighted ? 'gray-200' : 'white'} p-2`}>
          <p className="font-semibold">{ item.logradouro }</p>
          <p className="text-xs">{ item.bairro }</p>
        </div>
      }
    />
  )
}