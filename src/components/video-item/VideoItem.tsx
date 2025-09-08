import React, { FC, useEffect, useRef } from 'react';
import { IVideo } from '../../types/IVideo';
import styles from './videoItem.module.scss';

type VideoItemProps = {
  video: IVideo;
};

const VideoItem: FC<VideoItemProps> = ({ video }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const height = (iframeRef.current.offsetWidth * 9) / 16;
      iframeRef.current.style.height = `${height}px`;
    }
  }, []);

  return (
    <div className={styles.video}>
      <h3 className={styles.title}>{video.name}</h3>
      <iframe
        ref={iframeRef}
        src={`https://www.youtube.com/embed/${video.key}`}
        width="100%"
        title={video.name}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoItem;