import SegmentConfig from "../data/Segments.json"
import InventoryItem from "../components/InventoryItem";

// Renders the given list of items on the screen by category.
// The categories are rendered from the Segments.json file.
// To make this more dynamic, the segments can be passed just like the list of inventory items
function InventoryList({inventoryItems}) {
    const segments = Object.keys(SegmentConfig);
    return (
        segments.map((segment, index) =>
            <div key={index}>
                <h2>{segment}</h2>
                {inventoryItems.filter(item => {
                    if (SegmentConfig[segment] === "startsWith") {
                        return item.name.startsWith(segment)
                    }
                    if (SegmentConfig[segment] === "includes") {

                        return item.name.includes(segment)
                    }
                    return false
                }).map(item =>
                    <InventoryItem key={item.id} item={item}/>
                )}
            </div>
        )
    );
}

export default InventoryList;