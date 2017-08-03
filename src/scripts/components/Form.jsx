import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import _ from 'lodash';

import FormGroup from './FormGroup';
import FormViewer from  './FormViewer';

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
      <div className="Form">
        <form onSubmit={submit}>
          <div className="Form-content row">
            {groups}
          </div>
          <button type="submit">Submit</button>
        </form>
        <FormViewer form={form} />
      </div>
    );
  }
};

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
