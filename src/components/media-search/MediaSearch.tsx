import React, { FC, useState } from "react";
import styles from "./media-search.module.scss";
import { Category } from "../../types/tmdbTypes";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import clsx from "clsx";

type MediaSearchProps = {
  category: Category;
  initialKeyword?: string;
};

const MediaSearch: FC<MediaSearchProps> = ({
  category,
  initialKeyword = "",
}) => {
  const [keyword, setKeyword] = useState<string>(initialKeyword);
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmed = keyword.trim();
    if (trimmed) {
      navigate(`/${category}/search/${trimmed}`);
      setKeyword('')
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.input}
      />
      <Button onClick={handleSearch} className={clsx(styles.button, "small")}>
        Search
      </Button>
    </div>
  );
};

export default MediaSearch;
