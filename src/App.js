import './App.css';
import Inventorycake from './Components/Inventorycake';
import InventoryChoco from './Components/InventoryChoco';
import InventoryIce from './Components/InventoryIce';

function App() {
  return (
    <div className="App">
      <Inventorycake/>
      <InventoryIce/>
      <InventoryChoco/>
    </div>
  );
}

export default App;
