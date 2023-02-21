import { Container } from "./Components/Container/Container"
import { Header } from "./Components/Header/Header"

export const App = () => {

  return (
    <>
      <header><Header /> </header>

      <main>
        <nav><Container /> </nav>
        <section></section>
      </main>

      <footer></footer>
    </>
  )
}


