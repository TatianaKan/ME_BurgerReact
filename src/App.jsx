
import { Provider } from "react-redux"
import { Catalog } from "./Components/Catalog/CAtalog"
import { Header } from "./Components/Header/Header"
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
    </Provider>
  )
}


