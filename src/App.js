import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <Router>
      <NavBar name="Mi Sueño" />
      <Routes>
        <Route exact path='/' element={ <ItemListContainer /> }/>
      </Routes>
    </Router>
  );
}

export default App;
