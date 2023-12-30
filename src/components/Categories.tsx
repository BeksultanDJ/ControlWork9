import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendCategoryData } from './reducers/transactionSlice';
import { NavLink } from "react-router-dom";

const Categories = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        type: '',
        name: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(sendCategoryData(formData))
            .then(() => {
                setFormData({
                    type: '',
                    name: ''
                });
            })
            .catch((error) => {
                console.error('Error sending data:', error);
            });
    };

    return (
        <div>
            <header>
                <div className="container">
                    <h2>Finance Tracker</h2>
                    <div className="Links">
                        <NavLink to="/">
                            <strong>Finance List</strong>
                        </NavLink>
                        <strong>Add</strong>
                    </div>
                </div>
            </header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter category name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <button type="submit">Submit</button>
            </form>
            <div className="card">
                <div>
                    <p>Food</p>
                    <p>Type</p>
                </div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Categories;
