import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import _ from 'lodash';
import FormInput from './FormInput';

const FormField = ({ field, path, setFieldValue, subContent, ...rest }) => {
  const onChange = (value) => {
    setFieldValue(path, value);
  };

  return (
    <div className="FormField col-xs-12">
      <FormInput onChange={onChange} {...field.toJS()} {...rest} />
    </div>
  );
};

FormField.propTypes = {
  field: PropTypes.instanceOf(Immutable.Map),
  path: PropTypes.instanceOf(Immutable.List),
  subContent: PropTypes.element,
  setFieldValue: PropTypes.func
};

FormField.defaultProps = {
  field: Immutable.Map(),
  path: Immutable.List(),
  subContent: null,
  setFieldValue: _.noop
};

export default FormField;
