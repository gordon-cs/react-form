import _ from 'lodash';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { formActions } from '../actions';
import Form from './Form';
import '../../../node_modules/flexboxgrid/css/flexboxgrid.css';
import '../../styles/index.css';

injectTapEventPlugin();

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
