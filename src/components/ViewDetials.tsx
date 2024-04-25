import React from 'react';
import { useParams } from 'react-router-dom';
import inventoryData from "./Data/invertoryData.json";

interface InventoryItem {
  id: number;
  image: string;
  title: string;
  price: string;
  quantity: number;
}

const ViewDetails = () => {
  // Retrieve the `id` parameter from the URL and provide a default value if undefined
  const { id } = useParams<{ id?: string }>();
  
  // Handle the case where `id` could be undefined by defaulting to "0"
  const itemId = parseInt(id ?? "0", 10);

  // Find the item or return null if `itemId` is not a valid number
  const item = isNaN(itemId) ? null : inventoryData.find((item: InventoryItem) => item.id === itemId);


  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className='item-details'>
      <img
        src={item.image || "/static/images/coverNotFound.png"}
        alt='Detail Item Cover'
        style={{ width: '200px', height: '300px' }}
      />
      <h2>{item.title}</h2>
      <p><strong>Price:</strong> {item.price}</p>
      <p><strong>Quantity:</strong> {item.quantity}</p>
      <p><strong>Description:</strong> Description</p>
    </div>
  );
};

export default ViewDetails;
