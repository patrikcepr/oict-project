import React from 'react';

interface IProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  style: string | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<IProps> = ({ type, style, onClick, children }) => {
  return (
    <button type={type} className={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
