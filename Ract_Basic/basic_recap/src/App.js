import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Data from './data.json'

function App() {
  
  return (
    <div className="App">
  <Card titleText={Data[0].title} descText={Data[0].desc}/>
  <Card titleText={Data[1].title} descText={Data[1].desc}/>
  <Card titleText={Data[2].title} descText={Data[2].desc}/>
  <Card titleText={Data[3].title} descText={Data[3].desc}/>
  
    </div> 
  );
}

export default App;
