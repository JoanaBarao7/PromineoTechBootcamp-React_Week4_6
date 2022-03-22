import React from "react";
import { uuid } from "uuidv4";

export const Form = ({
    editing,
    form,
    reviews,
    setEditing,
    setForm,
    setReviews,
  }) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setReviews([...reviews, form]);
      setForm({ item: "", review: "", id: uuid() });
    };
  
    const handleUpdate = (e) => {
      e.preventDefault();
      setEditing(false);
      const updatedReviews = reviews.map((review) =>
        review.id === form.id ? form : review
      );
      setReviews(updatedReviews);
      setForm({ item: "", review: "", id: uuid() });
    };

    return (
        <form className="form" onSubmit={editing ? handleUpdate : handleSubmit}>
            <h2>Leave a review</h2>
            <label htmlFor="Item">Item</label>
            <input type="text" placeholder="Menu Item" id="item" name="item" value={form.item} onChange={handleChange} />

            <label htmlFor="Review">Review</label>
            <textarea placeholder="Leave a review." id="review" name="review" onChange={handleChange} />
            <button type="submit">{editing ? "Update" : "Submit"}</button>

        </form>
    );
};

export default Form;