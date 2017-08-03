import Immutable from 'immutable';
import _ from 'lodash';

import { formActionTypes } from '../actionTypes';

// Fake fetch
const fetch = () => Immutable.fromJS({
  groups: [
    {
      name: 'Parts Order Form',
      fields: [
        {
          name: 'firstName',
          label: 'First Name',
          value: null
        },
        {
          name: 'lastName',
          label: 'Last Name',
          value: null
        },
        {
          name: 'age',
          label: 'Age',
          value: null,
          type: 'number'
        }
      ]
    }
  ]
});

const parseInput = (inp) => {
  if (_.isNil(inp) || inp === '') {
    return null;
  }
  return inp;
};

const formReducer = (state = Immutable.Map(), action) => {
  switch (action.type) {
    case formActionTypes.fetch:
      return fetch();
    case formActionTypes.setFieldValue:
      return state.setIn(action.path.push('value'), parseInput(action.value));
    case formActionTypes.submit:
      // TODO: submit method
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default formReducer;
