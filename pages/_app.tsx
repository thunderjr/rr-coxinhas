import { Provider } from 'react-redux'
import { store } from '../store/cart'

import "tailwindcss/tailwind.css"
import "./../styles/hero-pattern.css"
import "./../styles/font-wrapper.css"
import './../styles/input.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
