
import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/ReduxStore";
import { loginUser } from "../../../redux/slices/authentication.slice";

interface ILoginFormProps{
  toggleRegister(): void;

}
export default function LoginForm(props: ILoginFormProps): JSX.Element {

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const auth = useSelector((state: RootState) => state.authentication)
  const dispatch: AppDispatch = useDispatch()

  const handleLoginUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (emailRef && emailRef.current && passwordRef && passwordRef.current) {
      dispatch(loginUser({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }))
    }
  }

  return (
    <div>
      <form action="" className="login-form w-full h-full flex flex-col items-center justify-start p-8">

        <h2>Please Login</h2>
        {
          auth.error ?
            (<p className="login-form-error mb-4 text-red-700">Username or password incorrect</p>)
            :
            (<></>)
        }
        <div className="">
          
          <div className="login-form-input-group w-full mb-4">
            <label htmlFor="email">Email</label>
            <input type="text" className="login-form-input w-full h-10 text-xl p-2 placeholder:text-text-sec focus:outline-none" name="email" placeholder="Email" ref={emailRef} required />
          </div>

          <div className="login-form-input-group w-full mb-4">
            <label htmlFor="password">Password</label>
            <input type="text" className="login-form-input w-full h-10 text-xl p-2 placeholder:text-text-sec focus:outline-none" name="password" placeholder="Password" ref={passwordRef} required />
          </div>

          <button className="login-form-submit w-full h-9 border-none bg-sec rounded-lg text-xl mb-4 cursor:pointer hover:bg-pri hover:text-text-pri hover:shadow-2xl hover:border-2 hover:border-pri " onClick={handleLoginUser}>Login</button>

          <p>Don't have an account
            <span className="login-form-register text-purple-700 cursor-pointer m-5 hover:underline" onClick={props.toggleRegister}>Create one here...</span>
          </p>
          
        </div>
      </form>
    </div>
  );
}