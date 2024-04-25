import React, { useState, useEffect } from "react";
import "./Styles/Home.css";
import inventoryData from "./Data/invertoryData.json";
import Search from "./Search";
import { Link } from "react-router-dom";

// Define the InventoryItem interface here
interface InventoryItem {
  id: number;
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
    setInventory(inventoryData);
  }, []);

  // Calculate pagination properties
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = inventory.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(inventory.length / itemsPerPage);

  // Function to handle pagination (change page)
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  // Navigate to the next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Navigate to the previous page
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <React.Fragment>
      <Search />
      <h2>Prime Picks</h2>
      {/* Pagination component with Previous and Next buttons */}
      <div className='pagination'>
        {currentPage > 1 && <button onClick={handlePrev}>Previous</button>}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              className='pagination-button'
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              style={{ opacity: currentPage === pageNumber ? "60%" : "100%" }}
            >
              {pageNumber}
            </button>
          )
        )}
        {currentPage < totalPages && <button onClick={handleNext}>Next</button>}
      </div>
      <div className='outer'>
        <div className='inventory-details'>
          {currentItems.map((item, index) => (
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
                  <Link to={`/view-details/${item.id}`}>View Details</Link>
                  <br />
                  <button>Add to Cart</button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination component with Previous and Next buttons */}
      <div className='pagination'>
        {currentPage > 1 && <button onClick={handlePrev}>Previous</button>}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              className='pagination-button'
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              style={{ opacity: currentPage === pageNumber ? "60%" : "100%" }}
            >
              {pageNumber}
            </button>
          )
        )}
        {currentPage < totalPages && <button onClick={handleNext}>Next</button>}
      </div>
    </React.Fragment>
  );
};

export default Display;
