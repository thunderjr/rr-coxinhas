import Cart, { Product, AddressData } from "../types/Cart"

const NUMBER = '5511954579497'

const messageText = (products: Product[], address: AddressData) => `Olá, quero fazer um pedido 😋👇
${products.map(p => `${p.qtd} x ${p.name}`).join('%0a')}

Para entregar:
${address.endereco}, ${address.numero}
${address.bairro} - ${address.complemento}
${address.cidade}

Quanto fica a taxa de entrega? 🛵
`.split('\n').join('%0a')

export default function messageSender(type: string, cart: Cart) {
  switch (type) {
    case 'NOW':
      window.open(`https://api.whatsapp.com/send?phone=${NUMBER}&text=${messageText(cart.products, cart.address)}`, '_blank')
      break;
  }
}