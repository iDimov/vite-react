import React from 'react';
import s from './Loader.module.css';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  fullScreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ size = 'medium', fullScreen = false }) => {
  return (
    <div className={`${s.loaderContainer} ${fullScreen ? s.fullScreen : ''}`}>
      <div className={`${s.loader} ${s[size]}`}>
        <div className={s.spinner}></div>
      </div>
    </div>
  );
};

export default Loader;