import { useEffect } from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

// Set the app element for accessibility
Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, image }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <button className={styles.closeButton} onClick={onClose}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      <div className={styles.content}>
        <img
          className={styles.image}
          src={image.urls.regular}
          alt={image.alt_description || 'Unsplash image'}
        />
        
        <div className={styles.info}>
          <div className={styles.metadataRow}>
            <div className={styles.author}>
              <img 
                className={styles.avatar}
                src={image.user.profile_image?.small} 
                alt={image.user.name}
              />
              <div className={styles.authorInfo}>
                <h3 className={styles.authorName}>{image.user.name}</h3>
                {image.user.username && (
                  <p className={styles.username}>@{image.user.username}</p>
                )}
              </div>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statIcon}>❤️</div>
                <div className={styles.statValue}>{image.likes?.toLocaleString() || '0'}</div>
                <div className={styles.statLabel}>LIKES</div>
              </div>
              
              <div className={styles.stat}>
                <div className={styles.statIcon}>📅</div>
                <div className={styles.statValue}>
                  {new Date(image.created_at).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
                <div className={styles.statLabel}>CREATED</div>
              </div>
              
              {image.width && image.height && (
                <div className={styles.stat}>
                  <div className={styles.statIcon}>📐</div>
                  <div className={styles.statValue}>{image.width} × {image.height}</div>
                  <div className={styles.statLabel}>DIMENSIONS</div>
                </div>
              )}

              {image.color && (
                <div className={styles.stat}>
                  <div className={styles.colorSwatch} style={{ backgroundColor: image.color }}></div>
                  <div className={styles.statValue}>{image.color}</div>
                  <div className={styles.statLabel}>COLOR</div>
                </div>
              )}
            </div>
          </div>
          
          {(image.description || image.alt_description) && (
            <div className={styles.description}>
              <p>{image.description || image.alt_description}</p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;