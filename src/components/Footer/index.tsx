import React from 'react';
import {
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiChevronUp,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';

const Footer: React.FC = () => {
  return (
    <footer className="container-fluid font-weight-bold footer p-3">
      <div className="d-sm-flex align-items-center justify-content-between p-3 ">
        <div className=" container-links">
          <Link className="pr-3 text-primary" to="/about-us">
            Sobre nós
          </Link>
          <Link className="pr-3 text-primary" to="/register-products">
            Vender
          </Link>
          <button
            type="button"
            className="font-weight-bold align-items-center text-primary"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <FiChevronUp size="25" color="#7737FF" />
            Voltar ao topo
          </button>
        </div>

        <div className="d-flex justify-content-end container-socials">
          <a className="pr-3" href="https://www.facebook.com/fabiano.reis.44/">
            <FiFacebook size="30" />
          </a>

          <a
            className="pr-3"
            href="https://www.instagram.com/reisfabian0/?hl=pt-br"
          >
            <FiInstagram size="30" />
          </a>

          <a className="pr-3" href="https://www.linkedin.com/in/fabianoreisf/">
            <FiLinkedin size="30" />
          </a>

          <a href="https://twitter.com/reisfabiano0">
            <FiTwitter size="30" />
          </a>
        </div>
      </div>

      <span className="container-fluid justify-content-start text-info p-3">
        Desenvolvido por Fabiano Reis 2020 ©
      </span>
    </footer>
  );
};
export default Footer;
