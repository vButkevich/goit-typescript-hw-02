import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import fetchPhotos, { Photo } from "../../photo-api";
import "./App.css";
import { FC, useEffect, useState } from "react";
import ImageModal from "../ImageModal/ImageModal";

const App: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    async function getData() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchPhotos(searchQuery, page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [searchQuery, page]);

  function handleLoadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  function handleSearch(newQuery: string) {
    setSearchQuery(newQuery);
    setPage(1);
    setPhotos([]);
  }

  function openModal(photo: Photo) {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setSelectedPhoto(null);
  }
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery photos={photos} onClick={openModal} />
      )}
      {photos.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {loading && <Loader />}
      {selectedPhoto && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          photo={selectedPhoto}
        />
      )}
    </>
  );
};
export default App;
