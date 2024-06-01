import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface AddItemsProps {
    menuItems: { name: string; price: number; icon: any }[];
    addItem: (itemName: string, itemPrice: number) => void;
}

const AddItems: React.FC<AddItemsProps> = ({ menuItems, addItem }) => {
    return (
        <div className="add-items">
            <h2>Add items</h2>
            {menuItems.map((item) => (
                <button key={item.name} onClick={() => {
                    console.log(`Button clicked: ${item.name}`);
                    addItem(item.name, item.price);
                }}>
                    <FontAwesomeIcon icon={item.icon} /> {item.name}
                </button>
            ))}
        </div>
    );
};

export default AddItems;
