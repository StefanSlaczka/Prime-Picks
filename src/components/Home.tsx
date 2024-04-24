import React, { useState, useEffect } from "react";
import "./Styles/Home.css";
import inventoryData from './Data/invertoryData.json';

// Define the InventoryItem interface here
interface InventoryItem {
  image?: string;
  title: string;
  price: string;
  quantity: number;
}

const Home = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  const handleAddToCart = (item: InventoryItem) => {
    console.log("Add to Cart", item);
  };

  useEffect(() => {
    setInventory(inventoryData);
  }, []);

  return (
    <React.Fragment>
      <h2>Prime Picks</h2>
      <div className='outer'>
        <div className='inventory-details'>
          {inventory.map((item, index) => (
            <div key={index} className='inventory-card outer'>
              <img
                src={item.image || "/static/images/coverNotFound.png"}
                alt='Inventory Item Cover'
                style={{ maxWidth: "100px", maxHeight: "150px" }}
              />
              <div className='inventory-description'>
                <p>
                  <strong>Title:</strong> {item.title}
                  <br />
                  <strong>Price:</strong> {item.price}
                  <br />
                  <strong>In Stock:</strong> {item.quantity}
                  <br />
                  <button onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </button>
                </p>
              </div>
            </div>
          ))}
          <a href='display/1' className='see-all'>
            View All
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
