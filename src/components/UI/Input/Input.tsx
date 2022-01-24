import React, { forwardRef, MutableRefObject } from 'react';

interface IInput {
  placeholder: string;
  type: string;
  id: string;
}

interface Props {
  style: string | undefined;
  label: string;
  link?: string;
  input: IInput;
  ref: MutableRefObject<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ style, label, input, link }, ref): JSX.Element => {
    return (
      <div className={style}>
        <label htmlFor={input.id}>
          <a href={link} target='_blank' rel='noreferrer noopener'>
            {label}
          </a>
        </label>
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
