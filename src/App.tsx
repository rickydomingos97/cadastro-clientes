import { CadastrarCliente } from "./components/CadastroCliente"
import { List } from "./components/List"

export function App() {

  return (
    <>
      <div className="flex flex-col max-w-8xl mx-auto py-5 justify-center items-center gap-5">
        <CadastrarCliente />
        <List />
      </div>
    </>
  )
}
