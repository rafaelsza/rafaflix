import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import data from '../../data/data.json';

import Template from '../Template';
import Field from '../../components/Field';
import Button from '../../components/Button';
import Select from '../../components/Select';

import { Container, ContainerButton } from './styles';

interface FormProps {
  title: string;
  url: string;
  category: string;
}

interface FormErrors {
  [key: string]: string;
}

const RegistrationVideo: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useHistory();

  const handleSubmit = useCallback(async (formData: FormProps) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().required('É preciso informar o título do vídeo'),
        url: Yup.string()
          .url('Url inválida')
          .required('É preciso informar a url do vídeo'),
        category: Yup.string().required('Escolha a categoria'),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });

      alert(
        `Title: ${formData.title} | URL: ${formData.url} | Category: ${formData.category}`,
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
        text: 'Criar categoria',
        onClick: () => navigation.push('/video/category/create'),
      }}
    >
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Field label="Título:" type="text" name="title" />
          <Field label="URL:" type="text" name="url" />
          <Select
            label="Categoria:"
            name="category"
            options={data.categories.map(category => ({
              value: category.name,
              label: category.name,
            }))}
          />
          <ContainerButton>
            <Button type="submit">Salvar</Button>
          </ContainerButton>
        </Form>
      </Container>
    </Template>
  );
};
export default RegistrationVideo;
