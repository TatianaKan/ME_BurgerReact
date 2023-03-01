
import { Provider } from "react-redux"
import { Catalog } from "./Components/Catalog/CAtalog"
import { Header } from "./Components/Header/Header"
import { ModalDelivery } from "./Components/ModalDelivery/ModalDelivery"
import { Navigation } from "./Components/Navigation/Navigation"
import { store } from "./store"

export const App = () => {

  return (
    <Provider store={store}>
   
      <header><Header /> </header>

      <main>
        <Navigation />
        <Catalog />
      </main>

      <footer></footer>
      <ModalDelivery />
    </Provider>
  )
}


