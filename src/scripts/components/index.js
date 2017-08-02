import React from 'react';
import Immutable from 'immutable';
import _ from 'lodash';
import { connect } from 'react-redux';
import { formActions } from '../actions';

import Form from './Form';

const mapStateToProps = (state) => ({
  form: state.form
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => {
    dispatch(formActions.fetch());
  },
  setFieldValue: (path, value) => {
    dispatch(formActions.setFieldValue(path, value));
  },
  submit: (e) => {
    if (!_.isNil(e)) {
      e.preventDefault();
    }
    dispatch(formActions.submit());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
