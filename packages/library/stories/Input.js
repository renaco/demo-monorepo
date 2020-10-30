import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputStyled = styled.input`
  height: 10px;
  padding: 10px 20px;
  border: 1px solid #646464;
  border-radius: 5px;
`

export const Input = ({ type, placeholder }) => {
  return (
    <InputStyled
      type={type}
      placeholder={placeholder}
    />
  );
};

Input.PropTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string
}

Input.defaultProps = {
  type: 'text',
  placeholder: ''
}