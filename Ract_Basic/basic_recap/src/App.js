import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Data from './data.json'
import { v4 as uuidv4 } from 'uuid';
import Users from './components/Users/Users';
import STATE from './components/STATE/STATE';
function App() {
  let items = [];
  items = Data.map((item) =><Card key={item.id} titleText={item.title} descText={item.desc}/>)
  return (
  <div className="App">
  {/* <Card titleText={Data[0].title} descText={Data[0].desc}/>
  <Card titleText={Data[1].title} descText={Data[1].desc}/>
  <Card titleText={Data[2].title} descText={Data[2].desc}/>
  <Card titleText={Data[3].title} descText={Data[3].desc}/> */}
  {items}
  <Users/>
  <h1>State work start from here</h1><br />
  <STATE/>
    </div> 
  );
}

export default App;
