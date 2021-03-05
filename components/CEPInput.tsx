import { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'
import axios from 'axios'

export default function CEPInput({ setAddr }) {
  const [val, setVal] = useState('')

  useEffect(() => {
    async function viaCEPRequest(query) {
      try {
        const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://viacep.com.br/ws/${query}/json`)}`)
        const data = JSON.parse(response.data.contents)

        if (Array.isArray(data)) {
          setAddr(data.shift()?.logradouro)
          return
        } 

        setAddr(data.logradouro)
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