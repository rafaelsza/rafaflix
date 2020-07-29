import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Field: React.FC<FieldProps> = ({ label, name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [focused, setFocused] = useState(false);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setFocused(!focused);
  }, [focused]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFocused={focused}>
      <label>{label}</label>
      {error && <span>{error}</span>}
      <input
        ref={inputRef}
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputFocus}
        defaultValue={name === 'color' ? '#000000' : defaultValue}
        {...rest}
      />
    </Container>
  );
};

export default Field;
