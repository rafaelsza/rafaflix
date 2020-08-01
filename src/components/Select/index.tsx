import React, { useRef, useEffect } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';

import { Container } from './styles';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}

const Field: React.FC<Props> = ({ label, name, ...rest }) => {
  const selectRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      /* eslint-disable-next-line */
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      <label htmlFor={`id_${name}`}>{label}</label>
      {error && <span>{error}</span>}
      <ReactSelect
        ref={selectRef}
        id={`id_${name}`}
        name={name}
        defaultValue={defaultValue}
        placeholder="Selecione..."
        styles={{
          control: (provided, _) => ({
            ...provided,
            height: 42,
            border: error ? '1px solid red' : '1px solid var(--blackLighter)',
            borderRadius: 5,
          }),
        }}
        {...rest}
      />
    </Container>
  );
};

export default Field;
