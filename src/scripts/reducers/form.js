import Immutable from 'immutable';
import _ from 'lodash';
import { formActionTypes } from '../actionTypes';
import * as materialComponentTypes from '../../constants/materialComponentTypes';

// Fake fetch
const fetch = () => Immutable.fromJS({
  name: 'Parts Order',
  groups: [
    {
      name: 'Group One',
      fields: [
        {
          name: 'firstName',
          label: 'First Name',
          value: null,
          type: materialComponentTypes.AUTO_COMPLETE,
          dataSource: ['andrew', 'kimmi', 'rachel', 'brenna']
        },
        {
          name: 'lastName',
          label: 'Last Name',
          value: null,
          type: materialComponentTypes.TEXT_FIELD
        },
        {
          name: 'quantity',
          label: 'Quantity',
          value: 1,
          type: materialComponentTypes.DROP_DOWN_MENU,
          dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
