import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import './styles.css';

import { FiLock, FiLogIn, FiMail, FiUser } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';

import signUpIlustration from '../../assets/images/signUpIlustration.svg';

import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import Header from '../../components/Header';

interface IFormData {
  nome: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
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
      <div className="container-sign-up">
        <div className="content-sign-up">
          <h1>Desapega aí</h1>
          <h2>Cadastro</h2>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input icon={FiUser} name="name" type="text" placeholder="Nome" />
            <Input icon={FiMail} name="email" placeholder="E-mail" />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />

            <button className="btn-sign-up" type="submit">
              <FiLogIn size={25} />
              Entrar
            </button>
          </Form>
        </div>

        <div className="container-ilustration">
          <img src={signUpIlustration} alt="sign-up" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
