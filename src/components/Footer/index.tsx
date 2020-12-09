import React from 'react';
import {
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiChevronUp,
} from 'react-icons/fi';
import './styles.css';

const Footer: React.FC = () => {
  return (
    <footer className="container-fluid font-weight-bold footer">
      <div className="row align-items-center justify-content-start py-3">
        <div className="col-10 ">
          <span className="pr-3 text-primary">Sobre nós</span>
          <span className="pr-3 text-primary">Como Vender</span>
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

        <div className="col-2 d-flex justify-content-end">
          <a className="pr-3" href="facebook">
            <FiFacebook size="25" color="#7737FF" />
          </a>

          <a className="pr-3" href="instagram">
            <FiInstagram size="25" color="#7737FF" />
          </a>

          <a className="pr-3" href="facebook">
            <FiLinkedin size="25" color="#7737FF" />
          </a>

          <a href="facebook">
            <FiTwitter size="25" color="#7737FF" />
          </a>
        </div>
      </div>

      <span className="row justify-content-start text-info p-3">
        Desenvolvido por Fabiano Reis 2020 ©
      </span>
    </footer>
  );
};
export default Footer;
