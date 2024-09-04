import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/ReduxStore'
import { LoginRegisterModal } from '../features/authentication/index.components'
import { Outlet } from 'react-router-dom'

const LayoutPage:React.FC = () => {
  const state = useSelector((state:RootState) => state.modal)

  return (
    <div>
      <div className="layout-page w-full h-fit relative">
        {
          state.displayLogin && <LoginRegisterModal />
        }
        <h1>Nav bar</h1>
        <Outlet />
        <h1>Footer</h1>
      </div>
    </div>
  )
}

export default LayoutPage
