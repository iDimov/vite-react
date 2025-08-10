import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import { searchImages } from './services/unsplash-api';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSearch = async (searchQuery) => {
    if (searchQuery.trim() === '') {
      return;
    }

    setQuery(searchQuery);
    setPage(1);
    setImages([]);
    setError(null);
    setLoading(true);

    try {
      const data = await searchImages(searchQuery, 1);
      setImages(data.results);
      setTotalPages(data.total_pages);
    } catch (err) {
      setError('Failed to fetch images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    setError(null);

    try {
      const data = await searchImages(query, nextPage);
      setImages(prevImages => [...prevImages, ...data.results]);
      setPage(nextPage);
    } catch (err) {
      setError('Failed to load more images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const hasMoreImages = page < totalPages;
  const showLoadMore = images.length > 0 && !loading && hasMoreImages;

  return (
    <div className="app">
      <SearchBar onSubmit={handleSearch} />
      
      {error && <ErrorMessage message={error} />}
      
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      
      {loading && <Loader />}
      
      {showLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}
      
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
      
      <Toaster position="top-right" />
    </div>
  );
}

export default App;