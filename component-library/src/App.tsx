import './App.css';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';
import AlertBoxProps from './components/AlertBox/AlertBox';
import { type AlertType } from './types';



export default function App() {
  return (
    <section>
      <UserProfileCard name='Miuris Gutierrez' email='mg@gmail.com' role='Head of SecOps' >
         <p>First: Pasha</p>
         <p>Second: Elizabeth</p>
         <p>Last: Victoria</p>
      </UserProfileCard>

      <UserProfileCard name='GG Gutierrez' email='gg@gmail.com' role='Intelligence Agent' >
        <p>GG has no children.</p>
        </UserProfileCard>

        
        <AlertBoxProps type={AletType}>

        </AlertBoxProps>
    </section>
  )
}