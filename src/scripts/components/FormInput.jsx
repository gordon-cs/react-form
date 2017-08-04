import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import * as materialComponentTypes from '../../constants/materialComponentTypes';

const FormInput = (props) => {
  const { dataSource, label, placeholder, onChange, type, value } = props;

  const renderLabel = () => {
    if (type === materialComponentTypes.DROP_DOWN_MENU) {
      return (
        <label
          className={`FormInput-${type}-label`}
          htmlFor={type}
        >
          {label}
        </label>
      );
    }
    return null;
  };

  const renderInput = () => {
    const inputProps = {
      className: 'FormInput-input',
      floatingLabelText: label,
      hintText: placeholder,
      onChange: (e, val) => onChange(val),
      fullWidth: true
    };

    if (type === materialComponentTypes.TEXT_FIELD) {
      return (
        <TextField {...inputProps} />
      );
    } else if (type === materialComponentTypes.AUTO_COMPLETE) {
      return (
        <AutoComplete
          {...inputProps}
          onUpdateInput={onChange}
          dataSource={dataSource}
        />
      );
    } else if (type === materialComponentTypes.DROP_DOWN_MENU) {
      const dropDownProps = {
        anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
        className: inputProps.className,
        maxHeight: 300,
        onChange: (e, k, val) => onChange(val),
        targetOrigin: { vertical: 'bottom', horizontal: 'left' },
        underlineStyle: { display: 'none' },
        value: _.isNil(value) ? undefined : value
      };

      return (
        <DropDownMenu {...dropDownProps}>
          {
            dataSource.map((data) => (
              <MenuItem key={`${Math.random()}`} value={data} primaryText={data} />
            ))
          }
        </DropDownMenu>
      );
    }
    return null;
  };

  return (
    <div className={`FormInput-${type}`}>
      {renderLabel()}
      {renderInput()}
    </div>
  );
};

FormInput.propTypes = {
  dataSource: PropTypes.array,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.any
};

FormInput.defaultProps = {
  dataSource: undefined,
  label: '',
  placeholder: '',
  onChange: _.noop,
  type: 'text',
  value: null
};

export default FormInput;
