import CardapioEntry from './CardapioEntry'

interface Product extends CardapioEntry {
    qtd: Number
}

export default interface Cart {
    products: Product[],
    address?: string
}