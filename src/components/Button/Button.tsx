import React from 'react';
import s from './Button.module.css';
import clsx from 'clsx';

type ButtonProps = {
  className?: 'filterModal' | 'viewNow' | 'search' | 'showMore' | 'send' | 'favourites' | 'close' | 'loadMore' | 'scrollToTop';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ className, children, onClick, type = 'button', disabled }) => {
  return (
    <button
      className={clsx(s.button, className && s[className])}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
