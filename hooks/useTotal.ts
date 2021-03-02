import React, { useEffect, useState } from 'react'
import Cart from './../types/Cart'

export default function useTotal(cart: Cart) {
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        setTotal(cart.products.reduce((acc, entry) => acc + (entry.qtd * entry.price), 0))
    }, [cart.products])

    return total
}