import Link from "next/link";

const Cliente = ({ cliente }) => {
  const { fullName, gender, nickname, age, picture, occupation, id } = cliente
  return (
    <div className="border hover:bg-gray-100 grid grid-cols-6 items-center">
      <div className="p-3">
        <img width='200' className="m-auto obkect-fit" src={picture} alt={nickname} />
      </div>
      <div className="p-3 text-center">{fullName}</div>
      <div className="p-3 text-center">
        <p><span className="text-gray-800 uppercase font-bold">Nickname:  </span>{nickname}</p>
        <p><span className="text-gray-800 uppercase font-bold">Edad:  </span>{age}</p>
      </div>
      <div className="p-3 text-center">{gender}</div>
      <div className="p-3 text-center">{occupation}</div>
      <div className="p-3 text-center">
        <div className="bg-rose-600 hover:bg-rose-800 block w-1/1 mb-3 text-white  p-2 uppercase font-bold text-lg">
          <Link href="/verCliente/[id]" as={`/verCliente/${id}`} type="button" > Ver</Link>
        </div>
      </div>
    </div>
  )
}

export default Cliente