import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './Component/AddUser';

function App() {
  return (
    <div className="App">
<Routes>

  <Route path='/user/add' element={<AddUser></AddUser>}></Route>
</Routes>
    </div>
  );
}

export default App;
