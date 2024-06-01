import React from 'react';


interface OrderItemProps {
    name: string;
    quantity: number;
    price: number;
    removeItem: (itemName: string) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ name, quantity, price, removeItem }) => {
    return (
        <div className="order-item">
            <span>{name}</span>
            <span>{quantity}</span>
            <span>{price * quantity} KGS</span>
            <button onClick={() => removeItem(name)}>Remove</button>
        </div>
    );
};

export default OrderItem;
