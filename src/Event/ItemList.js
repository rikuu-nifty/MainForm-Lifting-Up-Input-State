import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './designEvent.css'; // Import custom CSS file

function ItemList() {
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState({ name: '', category: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCurrentItem({ ...currentItem, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isEditing) {
            const updatedItems = [...items];
            updatedItems[editingIndex] = currentItem;
            setItems(updatedItems);
            setIsEditing(false);
            setEditingIndex(null);
        } else {
            setItems([...items, currentItem]);
        }
        setCurrentItem({ name: '', category: '' });
    };

    const handleDelete = (index) => {
        const filteredItems = items.filter((_, i) => i !== index);
        setItems(filteredItems);
    };

    const handleEdit = (index) => {
        setCurrentItem(items[index]);
        setIsEditing(true);
        setEditingIndex(index);
    };

    const handleItemClick = (event, item) => {
        event.stopPropagation();
        console.log("Item Clicked: ", item);
    };

    return (
        <div className="item-list-app container mt-5">
            <h2 className="text-center mb-4">Item List</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={currentItem.name}
                            placeholder="Item Name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col">
                        <select
                            name="category"
                            className="form-control"
                            value={currentItem.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Work">Work</option>
                            <option value="Personal">Personal</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-success">
                            {isEditing ? 'Update' : 'Add'}
                        </button>
                    </div>
                </div>
            </form>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <span onClick={(event) => handleItemClick(event, item)} className="item-text">{item.name} - {item.category}</span>
                        <div>
                            <button className="btn btn-warning btn-sm me-2" onClick={(event) => {
                                event.stopPropagation();
                                handleEdit(index);
                            }}>
                                Edit
                            </button>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
