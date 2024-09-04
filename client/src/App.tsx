
import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { useSelector } from 'react-redux';
import { RootState } from './redux/ReduxStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutPage from './pages/LayoutPage';

function App() {
  // const [displayLogin, setDisplayLogin] = useState<boolean>(true);
  const loggedInUser = useSelector((state:RootState)=> state.authentication.loggedInUser)
  useEffect(() => {
    console.log(loggedInUser)
  }, [loggedInUser])

  return (
    <>
      <h1>Library App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutPage/>}>
            <Route path='' element={<HomePage/>} />
            <Route path='/catalog' element={<>Catalog</>} />
            <Route path='/resource/:barcode' element={<>Resource</>} />
            <Route path='/profile/:userId' element={<>Profile</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
)
}

export default App
