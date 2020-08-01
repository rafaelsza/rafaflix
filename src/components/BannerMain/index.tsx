import React, { useEffect, useState } from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import {
  Container,
  BannerMainContainer,
  ContentAreaContainer,
  Item,
  Title,
  Description,
  WatchButton,
} from './styles';

interface BannerMainProps {
  videoTitle: string;
  videoDescription?: string;
  url: string;
}

const BannerMain: React.FC<BannerMainProps> = ({
  videoTitle,
  videoDescription,
  url,
}) => {
  const [youTubeID, setYouTubeID] = useState('');

  useEffect(() => {
    url &&
      setYouTubeID(
        url.replace(
          /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
          '$7',
        ),
      );
  }, [url]);

  return (
    <Container>
      {youTubeID && (
        <BannerMainContainer
          backgroundImage={`https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`}
        >
          <ContentAreaContainer>
            <Item>
              <Title>{videoTitle}</Title>
              <Description>{videoDescription}</Description>
            </Item>

            <Item>
              <VideoIframeResponsive youtubeID={youTubeID} />
              <WatchButton>Assistir</WatchButton>
            </Item>
          </ContentAreaContainer>
        </BannerMainContainer>
      )}
    </Container>
  );
};

export default BannerMain;
