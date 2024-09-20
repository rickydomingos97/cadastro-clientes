interface MeuBotaoProps {
  texto: string
}

export function MeuBotao(props: MeuBotaoProps) {
  return <button className="bg-green-500 px-2 rounded">{props.texto}</button>
}