/**
 * Checks if object is empty
 * @returns {boolean}
 */
function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

/**
 * Returns sub-object from object
 * @param obj
 * @param from
 * @param size
 * @returns {{}}
 */
function getSubObject(obj, from, size) {
  if (typeof obj !== 'object' && obj === null) {
    return {};
  }
  const objLength = Object.keys(obj).length;
  const newObj = {};
  let i, j;
  for (i = from, j = 0; i < objLength && j < size; i++, j++) {
    newObj[Object.keys(obj)[objLength - (i + 1)]] = Object.values(obj)[objLength - (i + 1)];
  }
  return newObj;
}

/**
 * Checks if parameter is object
 * @param param
 * @returns {boolean}
 */
function isObject(param) {
  if (param === undefined) {
    return true;
  }
  return typeof param === 'object' && param !== null;
}

export default {
  isEmpty,
  getSubObject,
  isObject
};
