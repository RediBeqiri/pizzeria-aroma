import React from 'react';
import './Reviews.css';

// Mock data for the reviews (This can later be fetched from a backend or API)
const reviews = [
  {
    name: 'John Doe',
    rating: 5,
    comment: 'The pizza was amazing! Great service and atmosphere.',
  },
  {
    name: 'Jane Smith',
    rating: 4,
    comment: 'Loved the pizza, but the wait was a bit long. Still worth it!',
  },
  {
    name: 'Mark Johnson',
    rating: 5,
    comment: 'Perfect place for a family dinner. We will be back soon!',
  },
  {
    name: 'Mark Johnson',
    rating: 5,
    comment: 'Perfect place for a family dinner. We will be back soon!',
  },
  {
    name: 'Mark Johnson',
    rating: 5,
    comment: 'Perfect place for a family dinner. We will be back soon!',
  },
];

const Reviews = () => {
  return (
    <div className="reviews-section">
      <h2>What Our Customers Are Saying</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name}</h3>
            <div className="rating">{'⭐'.repeat(review.rating)}</div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
