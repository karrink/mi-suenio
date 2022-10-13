import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailsContainer} from "./components/ItemDetailsContainer";


function App() {

  return (
    <Router>
      <NavBar name="Mi Sueño" />
      <Routes>
        <Route path={'/'} element={<ItemListContainer/>}/>
        <Route path={'/:id'} element={<ItemListContainer/>}/>
        <Route path={"/detail/:id"} element={<ItemDetailsContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
