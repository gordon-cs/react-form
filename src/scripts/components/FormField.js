import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import _ from 'lodash';

import FormInput from './FormInput';

const FormField = ({ field, path, setFieldValue, subContent, ...rest }) => {
  const Content = _.isNil(subContent) ? FormInput : subContent;
  const onChange = (e) => {
    setFieldValue(path, _.get(e, ['target', 'value'], null));
  };

  console.log(field);
  return (
    <div className="FormField">
      <h5 className="FormField-header">{field.get('name', null)}</h5>
      <div className="FormField-content">
        {<Content onChange={onChange} { ...field.toJS() } { ...rest } />}
      </div>
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
}

export default FormField;
