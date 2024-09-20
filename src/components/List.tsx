import { DeleteButton } from "./DeleteButton";

export function List() {
  return (
    <div className=" flex w-2/4 py-5 rounded text-zinc-100 font-medium bg-zinc-950">
      <div className="card bg-zinc-900 w-screen p-4 mx-4 flex flex-row justify-between items-start">
        <div className="">
        <p>Nome</p>
        <p>Email</p>
        <p>Status: ATIVO</p>
        </div>
        <DeleteButton />
      </div>
    </div>
  )
}