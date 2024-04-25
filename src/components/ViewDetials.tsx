import React from "react";
import { useParams } from "react-router-dom";
import inventoryData from "./Data/invertoryData.json";
import "./Styles/Home.css";

interface InventoryItem {
  id: number;
  image: string;
  title: string;
  price: string;
  quantity: number;
  description: string;
}

const ViewDetails = () => {
  // Retrieve the `id` parameter from the URL and provide a default value if undefined
  const { id } = useParams<{ id?: string }>();

  // Handle the case where `id` could be undefined by defaulting to "0"
  const itemId = parseInt(id ?? "0", 10);

  // Find the item or return null if `itemId` is not a valid number
  const item = isNaN(itemId)
    ? null
    : inventoryData.find((item: InventoryItem) => item.id === itemId);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <React.Fragment>
      <h1>Book Details</h1>
      <div className='item-details'>
        <div className='left-column'>
          <img
            src={item.image || "/static/images/coverNotFound.png"}
            alt='Detail Item Cover'
            style={{ width: "300px", height: "400px" }}
          />
        </div>
        <div className='right-column'>
          <p>
            <strong>{item.title}</strong><br/>
            <strong>Price:</strong> {item.price}<br/>
            <strong>Quantity:</strong> {item.quantity}<br/>
            <strong>Description:</strong> {item.description}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ViewDetails;
