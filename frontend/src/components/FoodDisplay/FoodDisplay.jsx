// 🍷 Import React & styles
import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

// 🥃 Component to show all items (filtered by category)
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext); // Get all items (alcohol, mixers, etc.)

  return (
    <div className='food-display' id='food-display'>
      <h2 className='eco-heading'>🍻 Browse Your Booze & Bites</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || item.category?.toLowerCase() === category.toLowerCase()) {
            return (
              <FoodItem
                key={item._id || index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
