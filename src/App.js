import "./App.css";
import InventoryList from "./sections/InventoryList";
import inventory from "./data/inventory.json"

function App() {
  return (
    <div>
      <header>Super Hunks! Home of the best estimating software, G</header>
      <InventoryList inventoryItems={inventory} />
    </div>
  );
}

export default App;