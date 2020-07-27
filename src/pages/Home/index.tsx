import React from 'react';

import initialData from '../../data/initial_data.json';

import { Container } from './styles';

import Header from '../../components/Header';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const Home: React.FC = () => (
  <Container>
    <Header />

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

    <Footer />
  </Container>
);

export default Home;
