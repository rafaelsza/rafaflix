import React from 'react';
import { useHistory } from 'react-router-dom';

import initialData from '../../data/initial_data.json';

import Template from '../Template';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

const Home: React.FC = () => {
  const navigation = useHistory();
  return (
    <Template
      button={{
        text: 'Criar Novo',
        onClick: () => navigation.push('/video/registration'),
      }}
    >
      <BannerMain
        videoTitle={initialData.categories[0].videos[0].title}
        url={initialData.categories[0].videos[0].url}
      />

      {initialData.categories.map(category => (
        <Carousel
          key={initialData.categories.indexOf(category)}
          ignoreFirstVideo={false}
          category={category}
        />
      ))}
    </Template>
  );
};

export default Home;
