
import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { IUser } from './models/User.model';

function App() {
  const [displayLogin, setDisplayLogin] = useState<boolean>(true);
  const [loggedInUser, setLoggedInUser] = useState<IUser>()

  const updateLoggedInUser = (user: IUser) => {
    setLoggedInUser(user)
  }

  useEffect(() => {
    console.log(loggedInUser)
  }, [loggedInUser])

  return (
    <>
      <h1>Library App</h1>
      <HomePage displayLogin={displayLogin} updateLoggedInUser={updateLoggedInUser} />
      
    </>
)
}

export default App
