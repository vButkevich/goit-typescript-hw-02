import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Photo } from "../../photo-api";
import { FC } from "react";

interface ImageGalleryProps {
  photos: Photo[];
  onClick: (photo: Photo) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ photos, onClick }) => {
  return (
    <ul className={css.list}>
      {photos.map((photo) => (
        <li key={photo.id} onClick={() => onClick(photo)}>
          <ImageCard item={photo} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
