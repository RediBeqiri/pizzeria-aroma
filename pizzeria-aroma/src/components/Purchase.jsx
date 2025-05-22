// Purchase.jsx
import React, { useEffect, useState } from "react";
import "./Purchase.css";

const Purchase = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("purchases")) || [];
    setPurchases(data.reverse()); // latest first
  }, []);

  return (
    <div className="purchase-container">
      <h2>Purchase Summary</h2>
      <div className="purchase-history">
        {purchases.length === 0 ? (
          <p>You haven't made any purchases yet.</p>
        ) : (
          purchases.map((purchase) => (
            <div key={purchase.id} className="purchase-item">
              <small>{purchase.timestamp}</small>
              <ul>
                {purchase.items.map((item) => (
                  <li key={item.id}>
                    <h4>{item.name}</h4>
                    <p>Quantity: {item.quantity}</p>
                    {item.comment && <p>Comment: {item.comment}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Purchase;
