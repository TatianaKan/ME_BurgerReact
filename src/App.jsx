
import { Catalog } from "./Components/Catalog/CAtalog"
import { Header } from "./Components/Header/Header"
import { Navigation } from "./Components/Navigation/Navigation"

export const App = () => {

  return (
    <>
      <header><Header /> </header>

      <main>
        <Navigation />
        <Catalog />
      </main>

      <footer></footer>
    </>
  )
}


