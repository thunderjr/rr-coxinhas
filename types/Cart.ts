import CardapioEntry from './CardapioEntry'

interface Product extends CardapioEntry {
    qtd: number
}

export default interface Cart {
    products: Product[],
    address?: string
}