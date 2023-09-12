
import './App.css';
import ItemListContainer from './Components/Navbar/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <ItemListContainer greeting={'Elegi lo mejor para tu mascota'}/>
      
    </div>
  );
}

export default App;
