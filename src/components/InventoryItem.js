import ItemQuantity from "../ItemQuantity";

// Renders a new item on the screen with a counter attached
function InventoryItem({item}) {
    return (
        <div>
            <div className="inventory">
                <p>{item.name} </p>
                <ItemQuantity>{item.name}</ItemQuantity>
            </div>
        </div>
    );
}

export default InventoryItem;
