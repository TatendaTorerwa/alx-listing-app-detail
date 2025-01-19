import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="border rounded-lg overflow-hidden shadow-lg">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Card;
