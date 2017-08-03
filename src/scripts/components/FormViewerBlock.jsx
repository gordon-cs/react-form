import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import _ from 'lodash';

import { isSafeType, makeKey } from '../util/general';

const IMMUTABLE_LIST_TYPE = 'IMMUTABLE_LIST_TYPE';
const IMMUTABLE_MAP_TYPE = 'IMMUTABLE_MAP_TYPE';
const FormViewerBlock = ({ content, indentLevel, indentSize, tag }) => {
  if (!isSafeType(tag)) {
    return null;
  }

  const nextIndentLevel = indentLevel + 1;
  const recursiveRender = (type = null, element, index) => {
    if (_.isNil(type)) {
      return null;
    }
    const recursiveProps = {
      key: makeKey(nextIndentLevel, tag),
      tag: null,
      content: null,
      indentLevel: nextIndentLevel
    };

    if (type === IMMUTABLE_LIST_TYPE) {
      _.set(recursiveProps, 'tag', index);
      _.set(recursiveProps, 'content', element);
    } else if (type === IMMUTABLE_MAP_TYPE) {
      _.set(recursiveProps, 'tag', element[0]);
      _.set(recursiveProps, 'content', element[1]);
    }
    return (<FormViewerBlock {...recursiveProps} />);
  };

  const renderListBlock = (e, i) => recursiveRender(IMMUTABLE_LIST_TYPE, e, i);
  const renderMapBlock = (e, i) => recursiveRender(IMMUTABLE_MAP_TYPE, e, i);

  const parse = (input) => {
    if (isSafeType(input)) {
      return input;
    } else if (input instanceof Immutable.List) {
      return input.map(renderListBlock);
    } else if (input instanceof Immutable.Map) {
      return input.entrySeq().map(renderMapBlock);
    } else if (_.isNil(input)) {
      return 'null';
    }
    return 'ERROR_PARSING_ELEMENT';
  };

  const inner = parse(content);
  const isSameLineContent = inner === content || _.isString(inner);

  const renderOpening = () => {
    if (isSameLineContent) {
      return (<span className="Block-same-line">{inner}</span>);
    } else if (content instanceof Immutable.List) {
      return (<span className="Block-same-line list-open">{'['}</span>);
    } else if (content instanceof Immutable.Map) {
      return (<span className="Block-same-line map-open">{'{'}</span>);
    }
    return null;
  };

  const renderContent = () => {
    if (isSameLineContent) {
      return (<span className="Block-comma-dangle">,</span>);
    }
    return inner;
  };

  const renderClosing = () => {
    if (inner !== content && !_.isString(inner)) {
      if (content instanceof Immutable.List) {
        return (<span className="Block-close list-close">{']'}</span>);
      } else if (content instanceof Immutable.Map) {
        return (<span className="Block-close map-close">{'}'}</span>);
      }
    }
    return null;
  };

  return (
    <div className="Block" style={{ marginLeft: `${indentLevel * indentSize}px` }}>
      <span className="Block-tag">{tag}: </span>
      {renderOpening()}
      {renderContent()}
      {renderClosing()}
    </div>
  );
};

FormViewerBlock.propTypes = {
  content: PropTypes.any,
  indentLevel: PropTypes.number,
  indentSize: PropTypes.number,
  tag: PropTypes.any
};

FormViewerBlock.defaultProps = {
  content: null,
  indentLevel: 0,
  indentSize: 6,
  tag: null
};

export default FormViewerBlock;
