/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"

export function CadastrarCliente() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [clients, setClients] = useState([]); // array para armazenar os clientes
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newClient = { name, email };
    try {
      const response = await fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newClient),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center bg-zinc-950 w-2/4 p-4">
      <h1 className="block text-xl font-bold leading-6 text-zinc-100">Clientes</h1>

      <form className="form flex flex-col py-4 gap-3" onSubmit={handleSubmit}>

        <label className="block text-base font-light leading-6">
          Nome
        </label>
        <input
          className="input p-4 rounded text-zinc-100 bg-zinc-900
          border border-white/10
          focus:outline-none
          focus:ring-1 focus:ring-inset focus:ring-pink-500"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label className="block text-base font-light leading-6">
          Email
        </label>
        <input
          className="input p-4 rounded text-zinc-100 bg-zinc-900
          border border-white/10
          focus:outline-none
          focus:ring-1 focus:ring-inset focus:ring-pink-500"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input className="bg-lime-300 h-16
        hover:bg-lime-400
        focus:outline-none focus:ring focus:ring-pink-500 
        rounded my-4 font-bold text-xl text-zinc-950"
          type="submit" value="Cadastrar" />
      </form>

    </div>
  )
}