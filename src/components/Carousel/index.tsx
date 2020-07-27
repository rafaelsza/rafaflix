import React from 'react';
import {
  VideoCardGroupContainer,
  VideoCardList,
  Title,
  ExtraLink,
} from './styles';

import VideoCard from './components/VideoCard';

interface VideoCardGroupProps {
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

const VideoCardGroup: React.FC<VideoCardGroupProps> = ({
  ignoreFirstVideo,
  category,
}) => {
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
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <VideoCardList>
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
      </VideoCardList>
    </VideoCardGroupContainer>
  );
};

export default VideoCardGroup;
