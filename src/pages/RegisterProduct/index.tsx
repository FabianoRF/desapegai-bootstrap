import React, { useCallback, useState, FormEvent } from 'react';

import './styles.css';

import { FiUpload } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import { useProductContext } from '../../hooks';

const HomeObjects: React.FC = () => {
  const { registerProduct } = useProductContext();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('cars');

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      await registerProduct(
        { title, price: Number(price), image_url, description },
        category,
      );

      alert(
        'Produto cadastrado com sucesso! você será redirecionado para a pagina de sua categoria!',
      );

      history.push(`/${category}`);
    },
    [title, price, image_url, description, category, registerProduct, history],
  );

  return (
    <>
      <Header />

      <main className="container p-5 container-register">
        <h2 className="font-weight-bold pb-3">Cadastre um novo item</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Título
              </span>
            </div>
            <input
              type="text"
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
              className="form-control"
              aria-label="Exemplo do tamanho do input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Preço: R$</span>
            </div>
            <input
              type="number"
              value={price}
              onChange={e => {
                setPrice(e.target.value);
              }}
              className="form-control"
              aria-label="Quantia"
            />
            <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                URL da imagem
              </span>
            </div>
            <input
              type="text"
              value={image_url}
              onChange={e => {
                setImageUrl(e.target.value);
              }}
              className="form-control"
              aria-label="Exemplo do tamanho do input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Descrição</span>
            </div>
            <textarea
              value={description}
              onChange={e => {
                setDescription(e.target.value);
              }}
              className="form-control"
              aria-label="Com textarea"
            />
          </div>

          <div className="input-group mt-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Categorias
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              defaultValue={category}
              onChange={e => {
                setCategory(e.target.value);
              }}
            >
              <option disabled value="">
                Escolha uma categoria...
              </option>
              <option value="home-objects">Casa</option>
              <option value="cars">Automóveis</option>
              <option value="objects">Pessoal</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-outline-primary btn-register"
          >
            <FiUpload />
            Cadastrar
          </button>
        </form>
      </main>

      <Footer />

      <Modal />
    </>
  );
};

export default HomeObjects;
