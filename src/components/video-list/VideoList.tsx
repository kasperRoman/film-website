import React, { FC, useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';
import { Category } from '../../types/tmdbTypes';
import { IVideo } from '../../types/IVideo';
import VideoItem from  '../video-item/VideoItem'

type VideoListProps = {
  id: string;
};

const VideoList: FC<VideoListProps> = ({ id }) => {
  const { category } = useParams<{ category: Category }>();
  const [videos, setVideos] = useState<IVideo[]>([]);

  const fetchVideos = useCallback(async () => {
    if (!category) return;
    const res = await tmdbApi.getVideos(category, Number(id));
    setVideos(res.results.slice(0, 5));
  }, [category, id]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return (
    <div>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoList;