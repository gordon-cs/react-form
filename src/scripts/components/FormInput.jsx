import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { isEnterKey } from '../util/keyPressEvents';

const FormInput = ({ label, name, onChange, submit, placeholder, type }) => {
  const onKeyDown = (e) => {
    if (isEnterKey(e)) {
      return submit(e);
    }
    return _.noop();
  };

  const parsedPlaceholder = _.isNil(placeholder) ? label : placeholder;
  return (
    <div className="FormInput">
      <input
        className="FormInput-input"
        name={name}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={parsedPlaceholder}
        type={type}
      />
      <span className="FormInput-highlight"></span>
      <span className="FormInput-bottom-bar"></span>
      <label className="FormInput-label">{label}</label>
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  submit: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

FormInput.defaultProps = {
  label: '',
  name: '',
  onChange: _.noop,
  submit: _.noop,
  placeholder: null,
  type: 'text'
};

export default FormInput;
