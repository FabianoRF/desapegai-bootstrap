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

const HomeObjects: React.FC = () => {
  const [homeObjects, setHomeObjects] = useState<ObjectData[]>([]);

  useEffect(() => {
    api.get('/home-objects').then(response => {
      setHomeObjects(response.data);
    });
  }, []);

  return (
    <>
      <Header />

      <div className="background-ho">
        <div className="container-title container d-md-flex flex-column ">
          <h1 className="text-center font-weight-bold">Itens para sua casa</h1>
          <h4 className="text-center">
            Encontre móveis, decoração, tapetes e muito mais...
          </h4>
        </div>

        <main className="container-main">
          <div className="container d-md-flex justify-content-between flex-wrap">
            {homeObjects.map(object => (
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

export default HomeObjects;
