import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';

import carImage from '../../assets/images/cars.jpeg';
import api from '../../services/api';

interface CarData {
  id: number;
  image_url: string;
  title: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const [cars, setCars] = useState<CarData[]>([]);

  useEffect(() => {
    api.get('/cars').then(response => {
      setCars(response.data);
    });
  }, []);

  return (
    <>
      <Header />

      <div className="background-car">
        <div className="container-title container d-md-flex flex-column ">
          <h2 className="text-center font-weight-bold">Encontre carros</h2>
          <h4 className="text-center">
            Veiculos semi-novos, clássicos ou 0km, você encontra tudo aqui...
          </h4>
        </div>

        <main className="container-main">
          <div className="container d-md-flex justify-content-between flex-wrap">
            {cars.map(car => (
              <Card
                key={car.id}
                id={car.id}
                title={car.title}
                image_url={car.image_url}
                description={car.description}
              />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
