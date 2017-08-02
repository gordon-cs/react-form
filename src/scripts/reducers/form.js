import Immutable from 'immutable';
import { formActionTypes } from '../actionTypes';

const fetch = () => Immutable.fromJS({
  groups: [
    {
      name: 'group1',
      fields: [
        { name: 'firstName' },
        { name: 'lastName' },
        {
          name: 'age',
          type: 'number'
        }
      ]
    }
  ]
});

const formReducer = (state = Immutable.Map(), action) => {
  switch (action.type) {
    case formActionTypes.fetch:
      return fetch();
    case formActionTypes.setFieldValue:
      return state.setIn(action.path.push('value'), action.value);
    case formActionTypes.submit:
      console.log(state.toJS());
      return state;
    default:
      return state;
  }
};

export default formReducer;
