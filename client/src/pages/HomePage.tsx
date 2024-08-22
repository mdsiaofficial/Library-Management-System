import { useSelector } from 'react-redux';
import { RootState } from '../redux/ReduxStore';
import { LoginRegisterModal } from '../features/authentication/index.components';

export default function HomePage():JSX.Element {

  const displayLogin = useSelector((state:RootState)=> state.modal.displayLogin)
  return (
    <div className=''>
      <div className="">Home page</div>
      {
        displayLogin ? <LoginRegisterModal /> : <></>
      }

    </div>
  );
}
