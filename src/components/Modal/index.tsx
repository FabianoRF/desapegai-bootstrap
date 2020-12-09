import React from 'react';
import { Modal } from 'react-bootstrap';

import './styles.css';

import { useProductContext } from '../../hooks';

const ProductModal: React.FC = () => {
  const { modalVisible, product, handleShowModal } = useProductContext();

  return (
    <>
      <Modal show={modalVisible} onHide={handleShowModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img
              className="img-modal"
              src={product.image_url}
              alt={product.title}
            />
            <div className="container-description">
              <span className="font-weight-bold">Descrição:</span>
              <p>{product.description}</p>
            </div>
            <div className="container-price">
              <span className="font-weight-bold">Preço:</span>

              <span className="price ">{`R$ ${product.price}`}</span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductModal;
