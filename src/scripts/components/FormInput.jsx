import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { isEnterKey } from '../util/keyPressEvents';

const FormInput = ({ name, onChange, submit, type }) => {
  const onKeyDown = (e) => {
    if (isEnterKey(e)) {
      return submit(e);
    }
    return _.noop();
  };

  return (
    <input
      className="FormInput"
      name={name}
      type={type}
      onChange={onChange}
      onKeyDown={onKeyDown}
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
