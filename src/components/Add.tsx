import { useDispatch, useSelector } from 'react-redux';
import { setFormData, clearFormData } from './reducers/transactionSlice';
import { sendTransactionData } from './reducers/transactionActions';

const AddExIn = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.transactions.formData);

    const handleChange = (event) => {
        const { name, value } = event.target;
        dispatch(setFormData({ ...formData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const transactionData = {
            category: formData.category,
            amount: parseFloat(formData.amount),
            createdAt: new Date().toISOString(),
        };
        dispatch(sendTransactionData(transactionData));
        dispatch(clearFormData());
    };

    return (
        <div>
            <form className="FormAdd" onSubmit={handleSubmit}>
                <select name="type" onChange={handleChange}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <select name="category" onChange={handleChange}>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                </select>
                <input
                    type="text"
                    name="amount"
                    placeholder="Enter sum"
                    value={formData.amount}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
                <button type="button">Cancel</button>
            </form>
        </div>
    );
};

export default AddExIn;
