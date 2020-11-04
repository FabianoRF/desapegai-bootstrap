import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import carousselImage1 from '../../assets/images/carroussel-image.png';
import carousselImage2 from '../../assets/images/boxes.jpg';
import ecommerceImage from '../../assets/images/e-commerce.svg';
import carImage from '../../assets/images/cars.jpeg';
import homeImage from '../../assets/images/home.jpeg';
import objectsImage from '../../assets/images/objects.jpeg';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Carousel className="mx-5">
        <Carousel.Item>
          <img
            className="d-block image-carroussel"
            src={carousselImage1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Anuncie o que quiser!</h3>
            <p>
              Desapegue de objetos, venda veículos, busque os melhores preços..
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image-carroussel"
            src={carousselImage2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Procure o que deseja!</h3>
            <p>
              Se não deseja desapegar de nada e sim se apegar, este também é seu
              lugar...
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image-carroussel"
            src={carousselImage1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <hr />

      <div className="container">
        <h2 className="font-weight-bold">Categorias</h2>
        <div className="container d-md-flex justify-content-between">
          <div className="card" style={{ width: '18rem' }}>
            <img
              className="card-img-top image-card"
              src={carImage}
              alt="Imagem de capa do card"
            />
            <div className="card-body">
              <h5 className="card-title">Veículos</h5>
              <p className="card-text">
                Anuncie seu véiculo ou procure por algum, é você quem manda!
              </p>
              <Link to="ssd" className="btn btn-primary btn-card">
                Visitar
              </Link>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img
              className="card-img-top image-card"
              src={homeImage}
              alt="Imagem de capa do card"
            />
            <div className="card-body">
              <h5 className="card-title">Casa</h5>
              <p className="card-text">
                Procure por móveis, decoração e tudo para a sua casa!
              </p>
              <Link to="ssd" className="btn btn-primary btn-card">
                Visitar
              </Link>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img
              className="card-img-top image-card"
              src={objectsImage}
              alt="Imagem de capa do card"
            />
            <div className="card-body">
              <h5 className="card-title">Objetos Pessoais</h5>
              <p className="card-text">
                Celulares, acessórios, eletrônicos e muito mais!
              </p>
              <Link to="ssd" className="btn btn-primary btn-card">
                Visitar
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="container-sm d-lg-flex align-items-center justify-content-center">
        <div>
          <h2 className="font-weight-bold">Desapegue você também!</h2>
          <p className="text-e-commerce">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque non
            cursus metus, sed mollis neque. Morbi maximus neque nec eros
            consequat, eget fringilla tortor luctus. Mauris commodo porttitor
            purus, nec pulvinar diam ultrices at. Nulla accumsan, diam in
            hendrerit dictum, elit velit fringilla neque.
          </p>
        </div>

        <img src={ecommerceImage} alt="e-commerce" />
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
