import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from './reducers/transactionSlice';

const DisplayInfo: React.FC = () => {
    const dispatch = useDispatch();
    const transactions = useSelector((state: any) => state.transactions.transactions);

    useEffect(() => {
        dispatch(getTransactions());
    }, [dispatch]);

    return (
        <>
            <header>
                <div className="container">
                    <h2>Finance Tracker</h2>
                    <div className="Links">
                        <strong>Categories</strong>
                        <strong>Add</strong>
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
        </>
    );
};

export default DisplayInfo;
