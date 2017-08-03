import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { makeKey } from '../util/general';

import FormViewerBlock from './FormViewerBlock';

const FormViewer = ({ form, indentSize }) => {
  const formBlocks = form.entrySeq().map((element) => (
    <FormViewerBlock
      key={makeKey(0, element[0])}
      tag={element[0]}
      content={element[1]}
      indentSize={indentSize}
    />
  ));

  return (<div className="FormViewer">{formBlocks}</div>);
};

export default FormViewer;

FormViewer.propTypes = {
  form: PropTypes.instanceOf(Immutable.Map),
  indentSize: PropTypes.number
};

FormViewer.defaultProps = {
  form: Immutable.Map(),
  indentSize: 6
};
