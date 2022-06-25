import logo from './logo.svg';
import './App.css';
import { Card,Button } from 'react-bootstrap';
import Login from './Components/Login/Login';

function App() {
  return (
//     <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>

  <div className="main">
    <Login></Login>
  </div>
  );
}

export default App;
