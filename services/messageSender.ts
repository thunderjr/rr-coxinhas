import Cart, { Product, AddressData } from "../types/Cart"

const NUMBER = '5511954579497'

const messageText = (payment: string, products: Product[], address: AddressData) => `Olá, quero fazer um pedido 😋👇
${products.map(p => `${p.qtd} x ${p.name}`).join('%0a')}

Para entregar:
${address.endereco}, ${address.numero}
${address.bairro} ${address.complemento !== '' ? `- ${address.complemento}` : ''}
${address.cidade}

Vai ser no ${payment}
Quanto fica a taxa de entrega? 🛵
`.split('\n').join('%0a')

export default function messageSender(type: string, cart: Cart) {
  if (!!cart.products.length) {
    if (cart.address.endereco && cart.address.numero) {
      switch (type) {
        case 'NOW':
          window.open(`https://api.whatsapp.com/send?phone=${NUMBER}&text=${messageText(cart.payment, cart.products, cart.address)}`, '_blank')
          break;
      }
    } else {
      alert('Por favor, verifique o endereço digitado!')
    }
  } else {
    alert('Para fazer um pedido, começe selecionando os produtos!')
  }
}