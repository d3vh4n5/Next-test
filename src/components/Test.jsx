'use client'
import { useState, useEffect } from "react"

const Test = () => {

  const [users, setUsers] = useState(null);

  async function cargarUsuarios(){
    setUsers([{name: 'cargando...'}])
    const resp = await fetch('/api/test')
    const data = await resp.json()

    setUsers(data)
    console.log(data)
  }
  return (
    <div>
        <h1>Testing cosas</h1>
        <div>
          <a href="/api/test" className="m-3 block text-blue-500">Api: test</a>
        </div>
        <button 
          onClick={cargarUsuarios}
          className="bg-white/10 py-1 px-2 rounded"
          >Boton</button>
        <div className="p-3 border-orange-300 border m-4">

        {
          users === null
            ? <>No hay nada</>
            : <>
              <ul>
                {users.map((user, index) => (
                  <li key={index}>
                    {user.name}
                  </li>
                ))}
              </ul>
            </>
        }
        </div>
    </div>
  )
}

export default Test