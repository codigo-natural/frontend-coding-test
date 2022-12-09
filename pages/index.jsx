import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import Cliente from '../components/Cliente'

function HomePage() {
  const [clientes, setCliente] = useState([])
  useEffect(() => {
    const trayendoUsuarios = async () => {
      try {
        const pidiendoUsuarios = await fetch('http://localhost:3001/people')
        const respuesta = await pidiendoUsuarios.json()
        respuesta.sort((a, b) => a.age - b.age)
        setCliente(respuesta)
      } catch (error) {
        console.log(error)
      }
    }
    trayendoUsuarios()
  }, [])


  return (
    <>
      <header className='flex justify-between items-center bg-slate-600'>
        <div className='flex flex-col items-center'>
          <h1
            className="
            font-black 
            text-3xl 
            text-rose-600
            mb-3">
            Clientes
          </h1>
          <p
            className="p-3 text-white">
            Administra  tus clientes
          </p>
        </div>
        <button
          className='
              bg-rose-600 
              hover:bg-rose-800 
              block
              w-32
              text-white
              mr-3
              p-1.5
            '>
          <Link
            href="/nuevoCliente"
            type="button">
            Agregar Usuario
          </Link>
        </button>
      </header>
      <aside className="">
        <ul className='p-3 text-center grid grid-cols-6 bg-slate-300'>
          <li className="">Imagen</li>
          <li className="">Nombre</li>
          <li className="">Nickname</li>
          <li className="">Genero</li>
          <li className="">Ocupacion</li>
          <li className="">Acciones</li>
        </ul>
        <section>
          {clientes.map(cliente => (
            <Cliente
              key={cliente.id}
              cliente={cliente}
            />
          ))}
        </section>
      </aside>
    </>
  )
}
export default HomePage