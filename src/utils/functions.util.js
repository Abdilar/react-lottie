/*
* Get random number
* @param {Number} number - A number that must be generated randomly
* */
export function randomNumber(number = 1) {
  return Math.floor(Math.random() * number);
}

export const {isArray} = Array;

export function isObject(data) {
  return data !== null && typeof data === 'object' && !isArray(data);
}

export function isElement(data) {
  return isObject(data) && data.nodeType === 1;
}

export function isNumber(data) {
  return typeof data === 'number';
}

export function isBoolean(data) {
  return typeof data === 'boolean';
}

export function isFunction(data) {
  return typeof data === 'function';
}

export function isEmptyObject(data) {
  return !(isObject(data) ? Object.keys(data).length : false);
}

export function isEmptyArray(data) {
  return !(isArray(data) ? data.length : false);
}
