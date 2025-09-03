import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Category } from "../../types/tmdbTypes";
import tmdbApi from "../../api/tmdbApi";
import { ICast } from "../../types/ICredits";
import apiConfig from "../../api/apiConfig";

type CastListProps = {
  id: string;
};

const CastList: FC<CastListProps> = ({ id }) => {
  const { category } = useParams<{ category: Category }>();
  const [casts, setCasts] = useState<ICast[]>([]);

  useEffect(() => {
    const getCredits = async () => {
      if (category) {
        const responce = await tmdbApi.credits(category, id);
        setCasts(responce.cast.slice(0, 5));
      } else {
        setCasts([]);
      }
    };
    getCredits();
  }, [category, id]);

  return (
    <div>
      {casts.map((item, i) => (
        <div key={i}>
          <div
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
