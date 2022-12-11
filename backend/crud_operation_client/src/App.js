
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './Component/AddUser';
import Home from './Component/Home';
import UpdateUser from './Component/UpdateUser';

function App() {
  return (
    <div className="App">
<Routes>

  <Route path='/user/add' element={<AddUser></AddUser>}></Route>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
</Routes>
    </div>
  );
}

export default App;
