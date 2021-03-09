import axios from 'axios'

export interface ViaCEPEntry {
  cep : string
  logradouro : string
  complemento : string
  bairro : string
  localidade : string
  uf : string
  ibge : string
  gia : string
  ddd : string
  siafi : string
}

export function addressSearch(city: string, query: string) {
  return axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(
    `https://viacep.com.br/ws/SP/${city.split(' ').join('%20')}/${query.split(' ').join('+')}/json`
  )}`)
}

export async function CEPSearch(cep: string) {
  return axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(
    `https://viacep.com.br/ws/${cep}/json`
  )}`)
}