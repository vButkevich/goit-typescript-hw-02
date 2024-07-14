import { FC } from "react";
import { Photo } from "../../photo-api";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  item: Photo;
}

const ImageCard: FC<ImageCardProps> = ({
  item: { description, likes, user, urls },
}) => {
  return (
    <div className={css.photo}>
      <img className={css.pic} src={urls.small} alt={description || "Image"} />
      <ul className={css.cardDescription}>
        <li className={css.description}>
          Author:
          <span className={css.accent}>{user.name}</span>
        </li>
        <li className={css.description}>
          Likes:
          <span className={css.accent}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default ImageCard;
