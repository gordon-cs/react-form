import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import _ from 'lodash';

const makeKey = (indentLevel, tag) => `${indentLevel}_${tag}_${Math.random()}`;

const Block = ({ tag, content, indentLevel = 0, indentSize = 6 }) => {
  const isSafeType = (x) =>
    _.isString(x) || _.isNumber(x) || _.isDate(x);

  if (!isSafeType(tag)) {
    throw new Error(`Block cannot accept a tag of type ${typeof tag}`);
  }

  const nextIndentLevel = indentLevel + 1;

  const parse = (input) => {
    if (isSafeType(input)) {
      return input;
    } else if (input instanceof Immutable.List) {
      return input.map((x, i) => (
        <Block
          key={makeKey(nextIndentLevel, x[0])}
          tag={i}
          content={x}
          indentLevel={nextIndentLevel}
        />
      ));
    } else if (input instanceof Immutable.Map) {
      return input.entrySeq().map((x) => (
        <Block
          key={makeKey(nextIndentLevel, x[0])}
          tag={x[0]}
          content={x[1]}
          indentLevel={nextIndentLevel}
        />
      ));
    } else if (_.isNil(input)) {
      return 'null';
    }
    return 'ERROR_PARSING';
  };

  const inner = parse(content);

  const renderOpening = () => {
    if (inner === content || _.isString(inner)) {
      return (<span className="Block-same-line">{inner}</span>);
    } else if (content instanceof Immutable.List) {
      return (<span className="Block-same-line list-open">{'['}</span>);
    } else if (content instanceof Immutable.Map) {
      return (<span className="Block-same-line map-open">{'{'}</span>);
    }
    return null;
  };

  const renderContent = () => {
    if (inner === content || _.isString(inner)) {
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

const FormViewer = ({ form, indentSize }) => {
  const formSeq = form.entrySeq();
  return (
    <div className="FormViewer">
      {
        formSeq
          .map((x) => (
            <Block
              key={makeKey(0, x[0])}
              tag={x[0]}
              content={x[1]}
              indentSize={indentSize}
            />
          ))
      }
    </div>
  );
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
