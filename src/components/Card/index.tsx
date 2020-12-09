import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';

import { useProductContext } from '../../hooks';

import './styles.css';

interface CardProps {
  id: number;
  image_url: string;
  title: string;
  price: number;
  description: string;
}

const Card: React.FC<CardProps> = ({
  id,
  description,
  image_url,
  title,
  price,
}) => {
  const { handleShowModal, setActualProduct } = useProductContext();

  const handleClickButtonDetails = useCallback(() => {
    setActualProduct({ description, id, image_url, price, title });
    handleShowModal();
  }, [
    description,
    id,
    image_url,
    price,
    title,
    setActualProduct,
    handleShowModal,
  ]);

  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img
          className="card-img-top image-card"
          src={image_url}
          alt="Imagem de capa do card"
        />
        <div className="card-body">
          <h5 className="card-title">{`${title} - R$ ${price}`}</h5>
          <p className="card-text">{description}</p>
          <Button
            type="button"
            onClick={handleClickButtonDetails}
            className="btn btn-primary btn-card"
          >
            <span className="text-light">Ver detalhes</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Card;
