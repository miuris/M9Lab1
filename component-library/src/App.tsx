import './App.css';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';



export default function App() {
  return (
    <section>
      <UserProfileCard name='Miuris Gutierrez'/>
       <ul> 
         <p>First: Pasha</p>
         <li>Second: Elizabeth</li>
         <li>Last: Victoria</li>
        </ul>
      <UserProfileCard name='GG Gutierrez' />
        <ul>
          <li>
            GG has no children.
          </li>
        </ul>
    </section>
  )
}

