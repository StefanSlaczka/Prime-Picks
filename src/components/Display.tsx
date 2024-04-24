import React, { useState, useEffect } from "react";
import "./Styles/Home.css";
import inventoryData from "./Data/invertoryData.json";
import Search from "./Search";
import { Link } from "react-router-dom";

// Define the InventoryItem interface here
interface InventoryItem {
  image?: string;
  title: string;
  price: string;
  quantity: number;
}

const Display = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(18); // Number of items per page

  useEffect(() => {
    console.log(inventoryData); // Check what is being imported
    setInventory(inventoryData);
  }, []);

  // Calculate pagination properties
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = inventory.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(inventory.length / itemsPerPage);

  // Function to handle pagination (change page)
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  console.log("inventory length:", inventory.length); // Added console log
  console.log("current page:", currentPage); // Added console log
  console.log("items per page:", itemsPerPage); // Added console log
  console.log("total pages:", totalPages); // Added console log
  console.log("current items:", currentItems); // Added console log

  return (
    <React.Fragment>
      <Search />
      <h2>Prime Picks</h2>
      <div className="outer">
        <div className="inventory-details">
          {currentItems.map((item, index) => (
            <div key={index} className="inventory-card outer">
              <img
                src={item.image || "/static/images/coverNotFound.png"}
                alt="Inventory Item Cover"
                style={{ maxWidth: "100px", maxHeight: "150px" }}
              />
              <div className="inventory-description">
                <p>
                  <strong>Title:</strong> {item.title}
                  <br />
                  <strong>Price:</strong> {item.price}
                  <br />
                  <strong>In Stock:</strong> {item.quantity}
                  <br />
                  <button>Add to Cart</button>
                </p>
              </div>
            </div>
          ))}
          <Link to="/display">View All</Link>
        </div>
      </div>

      {/* Pagination component (replace with your custom component) */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button key={pageNumber} onClick={() => paginate(pageNumber)}>
              {pageNumber}
            </button>
          )
        )}
      </div>
    </React.Fragment>
  );
};

export default Display;
