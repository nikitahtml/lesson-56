import React, { useReducer } from 'react';
import AddItems from './components/AddItems';
import OrderDetails from './components/OrderDetails';
import './App.css';
import { faHamburger, faPizzaSlice, faIceCream, faCoffee, faCarrot, faDrumstickBite } from '@fortawesome/free-solid-svg-icons';

interface OrderState {
  [key: string]: { quantity: number; price: number };
}

type Action =
    | { type: 'ADD_ITEM'; itemName: string; itemPrice: number }
    | { type: 'REMOVE_ITEM'; itemName: string };

const orderReducer = (state: OrderState, action: Action): OrderState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.itemName]: {
          quantity: state[action.itemName] ? state[action.itemName].quantity + 1 : 1,
          price: action.itemPrice,
        },
      };
    case 'REMOVE_ITEM':
      const newState = { ...state };
      delete newState[action.itemName];
      return newState;
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [order, dispatch] = useReducer(orderReducer, {});

  const menuItems = [
    { name: 'Hamburger', price: 140, icon: faHamburger },
    { name: 'Pizza', price: 320, icon: faPizzaSlice },
    { name: 'Coffee', price: 80, icon: faCoffee },
    { name: 'Nuggets', price: 90, icon: faDrumstickBite },
    { name: 'Ice Cream', price: 40, icon: faIceCream },
    { name: 'Salad', price: 70, icon: faCarrot },
  ];

  const addItemToOrder = (itemName: string, itemPrice: number) => {
    dispatch({ type: 'ADD_ITEM', itemName, itemPrice });
  };

  const removeItemFromOrder = (itemName: string) => {
    dispatch({ type: 'REMOVE_ITEM', itemName });
  };

  return (
      <div className="app">
        <OrderDetails order={order} removeItem={removeItemFromOrder} />
        <AddItems menuItems={menuItems} addItem={addItemToOrder} />
      </div>
  );
};

export default App;
