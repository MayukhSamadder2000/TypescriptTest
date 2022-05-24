import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import { Person } from './components/Person';
import PersonList from './components/PersonList';
import LoggedIn from './components/state/LoggedIn';
import Status from './components/Status';

function App() {
  const PersonName = {
    first: 'John',
    last: 'Doe'
  }
  const nameList = [
    {
      first: 'John',
      last: 'Doe'
    },
    {
      first: 'Jane',
      last: 'Doe'
    },
    {
      first: 'Jack',
      last: 'Doe'
    }
  ]
  return (
    <div className="App">
      <Greet name={"Abhijit"} msgCount={10} isLoggedIn={true}/>
      <Person name={PersonName} />
      <PersonList names={nameList} />
      <Status status='loading'/>
      <Heading>
        Baccha
      </Heading>
      <Oscar>
        <h2>Oscar</h2>
      </Oscar>
      <Button handleClick={(e, id)=>{
        console.log("Button clicked", e, id);
      }} />
      <Input value='' handleChange={(e)=>{
        console.log("Input changed", e);
      }}/>
      <Container styles={{
        border: '1px solid black',
        padding: '10px',
      }} />
      <LoggedIn />
    </div>
  );
}

export default App;
