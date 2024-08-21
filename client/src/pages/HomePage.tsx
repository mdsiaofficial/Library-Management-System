import LoginForm from '../features/authentication/components/LoginForm';
import { IUser } from '../models/User.model';

export interface IHomePageProps {
  displayLogin: boolean,
  updateLoggedInUser(user: IUser):void,

}

export default function HomePage(props: IHomePageProps):JSX.Element {

  return (
    <div>
      <div className="">Home page</div>
      {
        props.displayLogin ?
          (<div><LoginForm updateLoggedInUser={props.updateLoggedInUser}/></div>)
          :
          (<div></div>)
      }
    </div>
  );
}
