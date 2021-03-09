import CardapioEntry from "../types/CardapioEntry"

const cardapio: CardapioEntry[] = [
  {
    id: 0,
    name: "100 Mini Salgados",
    description: ['Coxinha de Frango', 'Bolinho de Calabresa', 'Bolinho de Queijo', 'Risole de Presunto e Queijo'].join('\n'),
    imageProps: {
      src: '/coxinha.png',
      height: 32,
      width: 25
    },
    price: 26.99,
  },
  {
    id: 1,
    name: "50 Mini Salgados",
    description: ['Coxinha de Frango', 'Bolinho de Calabresa', 'Bolinho de Queijo', 'Risole de Presunto e Queijo'].join('\n'),
    imageProps: {
      src: '/coxinha.png',
      height: 32,
      width: 25
    },
    price: 15.99,
  },
  {
    id: 2,
    name: "50 Mini Churros",
    description: ['Chocolate', 'Doce de Leite'].join('\n'),
    imageProps: {
      src: '/churros.png',
      height: 32,
      width: 25
    },
    price: 24.99,
  },
  {
    id: 3,
    name: "25 Mini Churros",
    description: ['Chocolate', 'Doce de Leite'].join('\n'),
    imageProps: {
      src: '/churros.png',
      height: 32,
      width: 25
    },
    price: 13.99,
  },
  {
    id: 4,
    name: "Combo Especial",
    description: ['50 Mini Salgados', '25 Mini Churros', 'Refrigerante Dolly 2L'].join('\n'),
    imageProps: {
      src: '/star-eyed-emoji.png',
      height: 35,
      width: 35
    },
    price: 31.99,
  },
]

export default cardapio
