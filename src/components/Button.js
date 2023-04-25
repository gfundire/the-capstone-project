import React from 'react';

const Button = ({
  children,
  onClick = () => {},
  ariaLabel = 'On Click',
  className = '',
  type = '',
}) => {
  return (
    <button
      type={type}
      className={'btn btn-primary px-4 py-3' + className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
