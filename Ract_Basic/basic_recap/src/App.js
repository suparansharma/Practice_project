import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  
  return (
    <div className="App">
  <Card titleText='Call Mother' descText='this is the desc1'/>
  <Card titleText='Call Father' descText='this is the desc2'/>
  <Card titleText='Call Mine' descText='this is the desc3'/>
    </div> 
  );
}

export default App;
