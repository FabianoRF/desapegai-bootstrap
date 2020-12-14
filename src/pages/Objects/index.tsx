import React, { useEffect, useState } from 'react';

import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Modal from '../../components/Modal';

import api from '../../services/api';

interface ObjectData {
  id: number;
  image_url: string;
  title: string;
  price: number;
  description: string;
}

const Objects: React.FC = () => {
  const [objects, setCars] = useState<ObjectData[]>([]);

  useEffect(() => {
    api.get('/objects').then(response => {
      setCars(response.data);
    });
  }, []);

  return (
    <>
      <Header />

      <div className="background-object">
        <div className="container-title container d-md-flex flex-column">
          <h1 className="text-center font-weight-bold">Encontre objetos</h1>
          <h4 className="text-center">
            Todos tipos de pertences, desde bicicletas à celulares...
          </h4>
        </div>

        <main className="container-main">
          <div className="container container-cards d-md-flex justify-content-between flex-wrap p-3">
            {objects.map(object => (
              <Card
                key={object.id}
                id={object.id}
                title={object.title}
                image_url={object.image_url}
                price={object.price}
                description={object.description}
              />
            ))}
          </div>
        </main>
      </div>

      <Footer />

      <Modal />
    </>
  );
};

export default Objects;
