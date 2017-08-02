import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { isEnterKey } from '../util/keyPressEvents';

const FormInput = ({ name, onChange, submit, type }) => {
  return (
    <input
      className="FormInput"
      name={name}
      type={type}
      onChange={onChange}
      onKeyDown={(e) => isEnterKey(e) ? submit(e) : _.noop()}
    />
  );
};

FormInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  submit: PropTypes.func,
  type: PropTypes.string
};

FormInput.defaultProps = {
  name: '',
  onChange: _.noop,
  submit: _.noop,
  type: 'text'
};

export default FormInput;
