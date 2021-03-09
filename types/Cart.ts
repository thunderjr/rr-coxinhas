import CardapioEntry from './CardapioEntry'

interface Product extends CardapioEntry {
    qtd: number
}

export interface AddressData {
    endereco: string
    numero: string
    complemento?: string
    bairro?: string
    cep?: number
    cidade?: string
}

export default interface Cart {
    products: Product[],
    address?: AddressData
}