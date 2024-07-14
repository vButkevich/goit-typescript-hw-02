import { FC } from "react";
import css from "./ImageModal.module.css";
import ReactModal from "react-modal";
import { Photo } from "../../photo-api";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  photo: Photo;
}

const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  onClose,
  photo: { description, urls },
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      onRequestClose={onClose}
      overlayClassName={css.modalOverlay}
      className={css.modalContent}
    >
      <div className={css.modalBoxOverlay}>
        <img
          className={css.imageModal}
          src={urls.regular}
          alt={description || "Image"}
        />
        <div className={css.textContainer}>
          <h2 className={css.modalText}>{description}</h2>
        </div>
      </div>
    </ReactModal>
  );
};
export default ImageModal;
