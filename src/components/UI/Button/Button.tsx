import React from 'react';

import { IChildren } from '../../../store/appContext';
interface IProps extends IChildren {
  type?: 'button' | 'submit' | 'reset' | undefined;
  style: string | undefined;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({
  type,
  style,
  onClick,
  children,
}): JSX.Element => {
  return (
    <button type={type} className={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
