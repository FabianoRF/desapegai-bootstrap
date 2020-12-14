import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './styles.css';

import peopleImg from '../../assets/images/people_ilustration.svg';
import fabianoImg from '../../assets/images/fabiano.png';
import catImg from '../../assets/images/cat_ilustration.svg';

const AboutUs: React.FC = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Header />

      <main className="container-about d-lg-flex justify-content-between">
        <div className="container-about-text">
          <h1>Conheça nossa equipe</h1>
          <p>Várias pessoas com o mesmo desejo: Desapegar e se apegar!</p>
        </div>

        <img src={peopleImg} alt="time" className="container-about-img" />
      </main>

      <section className="container-profile d-md-flex justify-content-between">
        <div className="container-profile-text">
          <h3>Desenvolvedor</h3>
          <p>
            Seu nome é Fabiano, tem 22 anos e cursa Ciência da Computação, ele
            também foi o idealizador do site.
          </p>
        </div>
        <img src={fabianoImg} alt="fabiano" />
      </section>

      <section className="container-profile d-md-flex flex-row-reverse justify-content-between">
        <div className="container-profile-text">
          <h3>UX/UI Designer</h3>
          <p>
            Ops... pelo jeito nossa equipe é formada por apenas um integrante
            ainda, mais quem sabe um dia...
          </p>
        </div>
        <img src={catImg} alt="fabiano" />
      </section>

      <section className="container-profile d-md-flex justify-content-between">
        <div className="container-profile-text">
          <h3>Marketing</h3>
          <p>
            Ops... pelo jeito nossa equipe é formada por apenas um integrante
            ainda, mais quem sabe um dia...
          </p>
        </div>
        <img src={catImg} alt="fabiano" />
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
