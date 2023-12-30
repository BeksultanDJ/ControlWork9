import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from './reducers/transactionSlice';
import AddExIn from './Add.tsx';

const DisplayInfo: React.FC = () => {
    const dispatch = useDispatch();
    const transactions = useSelector((state: any) => state.transactions.transactions);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        dispatch(getTransactions());
    }, [dispatch]);

    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };

    return (
        <>
            <header>
                <div className="container">
                    <h2>Finance Tracker</h2>
                    <div className="Links">
                        <strong>Categories</strong>
                        <strong onClick={toggleAddForm}>Add</strong>
                    </div>
                </div>
            </header>
            <div className="cardsContainer">
                {Array.isArray(transactions) && transactions.length > 0 ? (
                    transactions.map((transaction, index) => (
                        <div className="card" key={index}>
                            <div className="cardsInfo">
                                <p>Date: {transaction.createdAt}</p>
                                <p>Category: {transaction.category}</p>
                                <strong>Sum: {transaction.amount}</strong>
                            </div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>No transactions available</p>
                )}
            </div>
            {showAddForm && <AddExIn />}
        </>
    );
};

export default DisplayInfo;
