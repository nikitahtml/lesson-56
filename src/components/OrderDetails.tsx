import React from 'react';
import OrderItem from './OrderItem';

interface OrderDetailsProps {
    order: { [key: string]: { quantity: number; price: number } };
    removeItem: (itemName: string) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, removeItem }) => {
    const orderItems = Object.keys(order).map((itemName) => (
        <OrderItem
            key={itemName}
            name={itemName}
            quantity={order[itemName].quantity}
            price={order[itemName].price}
            removeItem={removeItem}
        />
    ));

    const totalPrice = Object.values(order).reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
    );

    return (
        <div className="order-details">
            <h2>Order Details</h2>
            {orderItems.length > 0 ? (
                <>
                    {orderItems}
                    <div className="total-price">
                        <strong>Total price: {totalPrice} KGS</strong>
                    </div>
                </>
            ) : (
                <p>No items in the order.</p>
            )}
        </div>
    );
};

export default OrderDetails;
