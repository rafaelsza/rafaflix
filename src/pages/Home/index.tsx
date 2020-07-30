import React from 'react';
import { useHistory } from 'react-router-dom';

import data from '../../data/data.json';

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
        videoTitle={data.categories[0].videos[0].title}
        url={data.categories[0].videos[0].url}
      />

      {data.categories.map(category => (
        <Carousel
          key={data.categories.indexOf(category)}
          ignoreFirstVideo={false}
          category={category}
        />
      ))}
    </Template>
  );
};

export default Home;
