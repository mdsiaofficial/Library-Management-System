import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/Modal";
import { AppDispatch, RootState } from "../../../redux/ReduxStore";
import { useEffect, useState } from "react";
import { setDisplayLogin } from "../../../redux/slices/modal.slice";
import LoginForm from "./LoginForm";


export interface ILoginRegisterModalProps {
}

export default function LoginRegisterModal(props: ILoginRegisterModalProps): JSX.Element {
  
  const authState = useSelector((state: RootState) => state.authentication)
  const dispatch: AppDispatch = useDispatch()

  const [login, setLogin] = useState<boolean>(false)

  const closeModal = () => {
    dispatch(setDisplayLogin(false))
  }

  const toggleLogin = () => {
    setLogin(!login)
  }

  useEffect(() => {
    if (authState.loggedInUser) {
      closeModal()
    }
    return (() => {
      if (authState.loggedInUser) {
        localStorage.setItem("userId", authState.loggedInUser._id)
      }
    })
  },[authState.loggedInUser])

  return (
    <div>
      <Modal content={login? <LoginForm toggleRegister={toggleLogin}/> : <></>} toggleModal={closeModal}/>
    </div>
  );
}
