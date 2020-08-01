import React from 'react';
import { useHistory } from 'react-router-dom';

import Template from '../Template';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import { useCategory } from '../../hooks/categories';

const Home: React.FC = () => {
  const navigation = useHistory();
  const { categories } = useCategory();

  return (
    <Template
      button={{
        text: 'Criar Novo',
        onClick: () => navigation.push('/video/registration'),
      }}
    >
      {categories[0]?.videos.length > 0 && (
        <BannerMain
          videoTitle={categories[0]?.videos[0].title}
          url={categories[0]?.videos[0].url}
        />
      )}

      {categories.map(category => (
        <Carousel
          key={categories.indexOf(category)}
          ignoreFirstVideo={false}
          category={category}
        />
      ))}
    </Template>
  );
};

export default Home;
