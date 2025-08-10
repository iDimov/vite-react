import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img 
        className={styles.image}
        src={image.urls.small} 
        alt={image.alt_description || 'Unsplash image'}
        loading="lazy"
      />
      <div className={styles.overlay}>
        <div className={styles.info}>
          <p className={styles.author}>
            📷 {image.user.name}
          </p>
          <p className={styles.likes}>
            ❤️ {image.likes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;