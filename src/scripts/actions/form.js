import { formActionTypes } from '../actionTypes';

export const fetch = () => ({ type: formActionTypes.fetch });

export const setFieldValue = (path, value) => ({
  type: formActionTypes.setFieldValue,
  path,
  value
});

export const submit = () => ({ type: formActionTypes.submit });
