import React, { useState } from "react";
import ReviewList from "./review-list";
import Form from "./form";
import "../../../src/App.css";
import { uuid } from "uuidv4";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({item: "", review: "", id: uuid() });
  const [editing, setEditing] = useState(false);

  return (
    <div className="appform">
      <h1>Item Review</h1>
          <Form editing={editing} form={form} reviews={reviews} setEditing={setEditing} setForm={setForm} setReviews={setReviews} />
      <ReviewList reviews={reviews} setForm={setForm} setEditing={setEditing} setReviews={setReviews} />
    </div>
  );
}

export default Review;