import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <header>
        <NavBar name="Mi Sueño" />
      </header>
      <main>
        <ItemListContainer greeting='Hola Coder!' className='ilc'/>
      </main>
    </div>
  );
}

export default App;
