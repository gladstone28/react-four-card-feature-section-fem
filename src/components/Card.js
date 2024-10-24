import React from 'react';

const Card = ({ className, title, description, imageSrc, imageAlt }) => {
  return (
    <div className={`card ${className}`}>
      <h4 className="card__title">{title}</h4>
      <p className="card__body">{description}</p>
      <img className="card__image" src={imageSrc} alt={imageAlt} />
    </div>
  );
};

export default Card;
