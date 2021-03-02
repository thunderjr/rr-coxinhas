import CardapioEntry from './CardapioEntry'

interface Product extends CardapioEntry {
    qtd: number
}

interface AddressData {
    endereco: string
    numero: string
    complemento?: string
    cep?: number
}

export default interface Cart {
    products: Product[],
    address?: string
}