import React, { forwardRef, MutableRefObject } from 'react';

interface IInput {
  placeholder: string;
  type: string;
  id: string;
}

interface Props {
  label: string;
  input: IInput;
  style: string | undefined;
  ref: MutableRefObject<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, input, style }, ref): JSX.Element => {
    return (
      <div className={style}>
        <label htmlFor={input.id}>{label}</label>
        <input
          ref={ref}
          placeholder={input.placeholder}
          type={input.type}
          id={input.id}
        />
      </div>
    );
  }
);

export default Input;
