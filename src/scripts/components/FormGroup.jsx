import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import FormField from './FormField';

const FormGroup = ({ group, path, ...rest }) => {
  const fields = group.get('fields', Immutable.List())
    .map((field, key) => (
      <FormField
        field={field}
        key={key}
        path={path.concat(['fields', key])}
        {...rest}
      />
    ));

  return (
    <div className="FormGroup col-xs-12">
      <h3 className="FormGroup-header">{group.get('name', null)}</h3>
      <div className="FormGroup-group row">
        {fields}
      </div>
    </div>
  );
};

FormGroup.propTypes = {
  group: PropTypes.instanceOf(Immutable.Map),
  path: PropTypes.instanceOf(Immutable.List)
};

FormGroup.defaultProps = {
  group: Immutable.Map(),
  path: Immutable.List()
};

export default FormGroup;
