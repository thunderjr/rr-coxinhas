import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import InputMask from 'react-input-mask'

import { CEPSearch } from './../services/viaCep'

export default function CEPInput() {
  const dispatch = useDispatch()
  const [val, setVal] = useState('')

  useEffect(() => {
    async function viaCEPRequest(query) {
      try {
        const data = await CEPSearch(query)
        if (Array.isArray(data)) {
          dispatch({
            type: 'SET_ADDRESS',
            payload: {
              endereco: data.shift()?.logradouro,
              bairro: data.shift().bairro,
              cidade: data.shift()?.localidade,
              cep: query
            }
          })
          return
        }

        dispatch({ 
          type: 'SET_ADDRESS',
          payload: {
            endereco: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            cep: query
          }
        })
      } catch(e) {
        console.log('CEP INPUT: request error')
      }
    }

    const formattedVal = val.replace('-', '')
    if (formattedVal.length === 8)  {
      viaCEPRequest(formattedVal)
    }
  }, [val])

  return (
    <InputMask className="flex-1" mask="99999-999" maskChar={null} value={val} onChange={e => setVal(e.target.value)} />
  )
}