import { useSelector } from 'react-redux';
import LoginForm from '../features/authentication/components/LoginForm';
import { RootState } from '../redux/ReduxStore';

export default function HomePage():JSX.Element {

  const displayLogin = useSelector((state:RootState)=> state.modal.displayLogin)
  return (
    <div className=''>
      <div className="">Home page</div>
      {
        displayLogin ? <LoginForm /> : <></>
      }

    </div>
  );
}
