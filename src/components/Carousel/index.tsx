import React from 'react';
import {} from 'react-slick';

import { VideoCardGroupContainer, Title, ExtraLink } from './styles';

import VideoCard from './components/VideoCard';
import Slider from '../Slider';

interface CarouselProps {
  ignoreFirstVideo: boolean;
  category: {
    title: string;
    color: string;
    linkExtra?: {
      text: string;
      url: string;
    };
    videos: Array<{
      title: string;
      url: string;
    }>;
  };
}

const Carousel: React.FC<CarouselProps> = ({ ignoreFirstVideo, category }) => {
  const categoryTitle = category.title;
  const categoryColor = category.color;
  const categoryExtraLink = category.linkExtra;
  const { videos } = category;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {/* {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )} */}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
};

export default Carousel;
