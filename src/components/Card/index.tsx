import React from 'react'
import './Card.css';

const Card = () => {
  return (
    <div className="custom-card-container bg-vanilla-white rounded-lg shadow-md overflow-hidden relative">
      {/* Edit Icon (Top-Right Corner) */}
      <div className="absolute top-2 right-2 p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      </div>

      {/* Image (Top-Left Corner) */}
      <img
        src="https://via.placeholder.com/150" // Replace with your image URL
        alt="Food"
        className="w-20 h-20 object-cover rounded-lg absolute top-2 left-2 border-2 border-white shadow-sm"
      />

      {/* Card Content */}
      <div className="p-4 pt-24">
        {/* Food Name */}
        <h2 className="text-xl font-bold text-gray-800 mb-1">Spicy Pizza</h2>

        {/* Category */}
        <p className="text-sm text-gray-500 mb-2">Italian Cuisine</p>

        {/* Discount and Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm line-through text-gray-400">$15.00</span>
          <span className="text-lg font-bold text-green-600">$12.00</span>
          <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded-full">
            20% off
          </span>
        </div>

        {/* Ingredients */}
        <p className="text-sm text-gray-600 mb-4">
          Ingredients: Tomato, Cheese, Basil, Pepperoni
        </p>

        {/* Count and Unit of Measurement */}
        <div className="flex items-center text-sm text-gray-700">
          <span>Count: 2</span>
          <span className="mx-1">•</span>
          <span>Unit: Plate</span>
        </div>
      </div>
    </div>
  );
};

export default Card;