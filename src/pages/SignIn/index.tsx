import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import './styles.css';

import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import Footer from '../../components/Footer';

import signInIlustration from '../../assets/images/signInIlustration.svg';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Header from '../../components/Header';

interface IFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string()
            .required('Senha obrigatória')
            .min(8, 'Senha deve conter pelo menos 8 caracteres.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        alert('Login efetuado com sucesso, aproveite as compras!');
        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [history],
  );

  return (
    <>
      <Header showLogo={false} />

      <div className="container-sign-in">
        <div className="content-sign-in">
          <h1>Desapega aí</h1>
          <h2>Login</h2>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input icon={FiMail} name="email" placeholder="E-mail" />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />

            <button className="btn-sign-in" type="submit">
              <FiLogIn size={25} />
              Entrar
            </button>
          </Form>

          <Link to="/sign-up">
            Não Possui Cadastro?
            <strong> Cadastre-se</strong>
          </Link>
        </div>

        <div className="container-ilustration">
          <img src={signInIlustration} alt="Sign-in" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignIn;
