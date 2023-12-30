import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearFormData } from './reducers/transactionSlice';
import { sendTransactionData } from './reducers/transactionActions';
import { v4 as uuidv4 } from 'uuid';

const AddExIn = ({ handleCloseForm }) => {
    const dispatch = useDispatch();
    const [localFormData, setLocalFormData] = useState({
        id: '',
        type: '',
        category: '',
        amount: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLocalFormData({ ...localFormData, [name]: value });
    };

    const handleCancel = () => {
        handleCloseForm();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const transactionData = {
            id: uuidv4(), // Создание уникального идентификатора с помощью uuidv4()
            category: localFormData.category,
            amount: parseFloat(localFormData.amount),
            createdAt: new Date().toISOString(),
        };
        dispatch(sendTransactionData(transactionData));
        dispatch(clearFormData());
        handleCloseForm();
    };

    return (
        <div className="modal">
            <form className="FormAdd" onSubmit={handleSubmit}>
                <select name="type" onChange={handleChange}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <select name="category" onChange={handleChange}>
                    <option value="category">Category</option>
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                </select>
                <input
                    type="text"
                    name="amount"
                    placeholder="Enter sum"
                    value={localFormData.amount}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default AddExIn;
