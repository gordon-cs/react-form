import _ from 'lodash';

export const makeKey = (...args) => !_.isArray(args)
  ? `${Math.random()}`
  : args.map((x) => `${x}`).concat(`${Math.random()}`).join('_');

export const isSafeType = (x) => _.isString(x) || _.isNumber(x) || _.isDate(x);

export default {
  isSafeType,
  makeKey
};
