import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../../../services/api'

function Home() {
const [users, setUsers] = useState([])

const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()
 

 async function getUsers(){
  const usersFromApi = await api.get('/usuarios')

  setUsers(usersFromApi.data)
   console.log(users)

 async function creatUsers(){
  await api.post('/usuarios', {
    name: inputName.current.value,
    age: inputAge.current.value,
    email: inputEmail.current.value
  })

  setUsers(usersFromApi.data)
   console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])
  

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome"name="nome" type='text' ref={inputName}/>
        <input placeholder="Idade"name="idade" type='number' ref={inputAge}/>
        <input placeholder="Email"name="email" type='email' ref={inputEmail}/>
        <button type='button'onClick={creatUsers}>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email:{user.email}</p>
          </div>
          <button>
          </button>
        </div>

      ))}



    </div>

  )
}

export default Home
