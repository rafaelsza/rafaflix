import React from 'react';

import { VideoCardGroupContainer, Title } from './styles';

import VideoCard from './components/VideoCard';
import Slider from '../Slider';
import { Category } from '../../hooks/categories';

interface CarouselProps {
  ignoreFirstVideo: boolean;
  category: Category;
}

const Carousel: React.FC<CarouselProps> = ({ ignoreFirstVideo, category }) => (
  <VideoCardGroupContainer>
    {category.title && (
      <>
        <Title style={{ backgroundColor: category.color || 'red' }}>
          {category.title}
        </Title>
        {/* {category.description} */}
      </>
    )}
    <Slider>
      {category.videos?.map((video, index) => {
        if (ignoreFirstVideo && index === 0) {
          return null;
        }

        return (
          <li key={video.title}>
            <VideoCard
              videoTitle={video.title}
              videoURL={video.url}
              categoryColor={category.color}
            />
          </li>
        );
      })}
    </Slider>
  </VideoCardGroupContainer>
);

export default Carousel;
