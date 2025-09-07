import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Button from '../Button/Button';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <Button className='scrollToTop' onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp size={20} />
      </Button>
    )
  );
};

export default ScrollToTopButton;
