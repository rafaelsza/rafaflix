import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Template from '../Template';
import Field from '../../components/Field';
import Button from '../../components/Button';

import { Container, ContainerButton } from './styles';

interface FormProps {
  name: string;
  description: string;
  color: string;
}

interface FormErrors {
  [key: string]: string;
}

const CreateCategory: React.FC = () => {
  const navigation = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormProps) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required(
          'É preciso informar um nome para a categoria',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      alert(
        `Name: ${data.name} | Description: ${data.description} | Color: ${data.color}`,
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: FormErrors = {};

        error.inner.forEach(err => {
          validationErrors[err.path] = err.message;
        });

        formRef.current?.setErrors(validationErrors);
      }
    }
  }, []);

  return (
    <Template
      button={{
        text: 'Voltar',
        onClick: () => navigation.push('/video/registration'),
      }}
    >
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Field label="Nome da categoria:" type="text" name="name" />
          <Field label="Descrição:" type="text" name="description" />
          <Field label="Cor:" type="color" name="color" />
          <ContainerButton>
            <Button type="submit">Salvar</Button>
          </ContainerButton>
        </Form>
      </Container>
    </Template>
  );
};
export default CreateCategory;
