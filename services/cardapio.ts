import CardapioEntry from "../types/CardapioEntry"

const cardapio: CardapioEntry[] = [
  {
    name: "100 Mini Salgados",
    description: ['Coxinha de Frango', 'Bolinho de Calabresa', 'Bolinho de Queijo', 'Risole de Presunto e Queijo'].join('\n'),
    price: 24.99,
  },
  {
    name: "50 Mini Salgados",
    description: ['Coxinha de Frango', 'Bolinho de Calabresa', 'Bolinho de Queijo', 'Risole de Presunto e Queijo'].join('\n'),
    price: 13.99,
  },
  {
    name: "50 Mini Churros",
    description: ['Chocolate', 'Doce de Leite'].join('\n'),
    price: 23.99,
  },
  {
    name: "25 Mini Churros",
    description: ['Chocolate', 'Doce de Leite'].join('\n'),
    price: 11.99,
  },
  ,
  {
    name: "Combo Especial",
    description: ['50 Mini Salgados', '25 Mini Churros', 'Refrigerante Dolly 2L'].join('\n'),
    price: 31.99,
  },
]

export default cardapio
