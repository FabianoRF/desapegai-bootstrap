import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface CardProps {
  id: number;
  image_url: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ id, description, image_url, title }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        className="card-img-top image-card"
        src={image_url}
        alt="Imagem de capa do card"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link
          to={`/product-details/${id}`}
          className="btn btn-primary btn-card"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
};

export default Card;
