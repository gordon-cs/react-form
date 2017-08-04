import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import _ from 'lodash';
import FormGroup from './FormGroup';
import FormViewer from  './FormViewer';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends React.Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const {
      form,
      submit
    } = this.props;

    const groups = form.get('groups', Immutable.List())
      .map((group, key) => (
        <FormGroup
          group={group}
          key={key}
          path={Immutable.fromJS(['groups', key])}
          {...this.props}
        />
      ));

    return (
      <div className="row">
        <Paper className="Form col-sm-6" zDepth={1}>
          <form className="Form-form" onSubmit={submit}>
            <h3 className="Form-header">{form.get('name', null)}</h3>
            <div className="Form-content row">
              {groups}
            </div>
            <div className="Form-submit-button">
              <RaisedButton
                fullWidth
                label="Submit"
                type="submit"
                primary
              />
            </div>
          </form>
        </Paper>
        <Paper className="FormViewer-wrapper" zDepth={1}>
          <FormViewer form={form} />
        </Paper>
      </div>
    );
  }
}

Form.propTypes = {
  fetch: PropTypes.func,
  form: PropTypes.instanceOf(Immutable.Map),
  submit: PropTypes.func
};

Form.defaultProps = {
  fetch: _.noop,
  form: Immutable.Map(),
  submit: _.noop
}

export default Form;
