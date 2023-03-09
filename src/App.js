
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">

      <Navbar />
      <ItemListContainer greeting={"Hola a todos!"} />


    </div>
  );
}

export default App;
