import React from 'react';
import './App.css';
import PersonCard from './components/Prop';


function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Jane"} lastName="Doe" age={45} hairColor="Black"><h1></h1></PersonCard>
      <PersonCard firstName={"John"} lastName="Smith" age={88} hairColor="Brown"/>  
      <PersonCard firstName={"Millard"} lastName="Fillmore" age={50} hairColor="Brown"/>  
      <PersonCard firstName={"Maria"} lastName="Smith" age={62} hairColor="Brown"/>
      <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
    </div>
  );
}

export default App;
