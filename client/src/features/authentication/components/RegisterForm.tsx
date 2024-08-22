import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/ReduxStore";
import React, { useEffect, useRef } from "react";
import { registerUser, resetRegisterSuccess } from "../../../redux/slices/authentication.slice";


export interface IRegisterFormProps {
  toggleLogin(): void
}

export default function RegisterForm(props: IRegisterFormProps) {
  const authState = useSelector((state: RootState) => state.authentication)
  const dispatch: AppDispatch = useDispatch()

  const firstRef = useRef<HTMLInputElement>(null)
  const lastRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passRef = useRef<HTMLInputElement>(null)

  const handleRegisterUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    
    if (
      firstRef && firstRef.current &&
      lastRef && lastRef.current &&
      emailRef && emailRef.current &&
      passRef && passRef.current
    ) {
      dispatch(registerUser({
        type: "PATRON",
        firstName: firstRef.current.value,
        lastName: lastRef.current.value,
        email: emailRef.current.value,
        password: passRef.current.value
      }))
    }
  }

  useEffect(() => {

    return (() => {
      dispatch(resetRegisterSuccess())
    })
  }, [])
  return (
    <div>
      <form action="" className='register-form w-full h-full flex flex-col items-center justify-start p-4'>
        <h2>Enter your information</h2>
        {
          authState.error ? <p className="register-form-error mb-4 text-[crimson]">There was an error!!!</p> : <></>
        }

        <div className="register-form-name-group w-full flex justify-between items-center">
          <div className="register-form-name-input-group m-0 w-[45%] mb-4 ">
            <label htmlFor="firstname">First Name</label>
            <input type="text" className="register-form-input-name w-full h-9 text-xl p-2" name="firstname" placeholder="First Name" ref={firstRef} required />
          </div>
          <div className="register-form-name-input-group m-0 w-[45%] mb-4 ">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" className="register-form-input-name w-full h-9 text-xl p-2" name="lastname" placeholder="Last Name" ref={lastRef} required />
          </div>
        </div>
        <div className="register-form-input-group w-full mb-4">
          <label htmlFor="email">Email</label>
          <input type="text" className="register-form-input w-full h-10 text-xl p-2 " name="email" placeholder="Email" ref={emailRef} required />
        </div>
        <div className="register-form-input-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="register-form-input w-full h-10 text-xl p-2 mb-4" name="password" placeholder="Password" ref={passRef} required />
        </div>

        <button className="register-form-submit w-full h-9 border-none bg-sec rounded-lg text-xl mb-4 cursor-pointer hover:bg-pri hover:border-2 hover:border-black hover:shadow-xl" onClick={handleRegisterUser}>Register</button>
        {
          authState.registerSuccess ?
            <p>Registered Successfully.
              <span className="register-form-login text-pri cursor-pointer ml-2 hover:underline " onClick={props.toggleLogin}>Login here...</span>
            </p>
            :
            <></>
        }
      </form>
    </div>
  );
}
