import React from 'react'

const ReviewItem = ({ handleDelete, handleEdit, review }) => {
  return (
    <div className="reviewItem">
      <h2>{review.item}</h2>
      <p>{review.review}</p>
      <div className="buttons">
        <button className="btn btn-info" onClick={() => handleDelete(review.id)}>
          Delete
        </button>
        <button className="btn btn-primary" onClick={() => handleEdit(review.id)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;