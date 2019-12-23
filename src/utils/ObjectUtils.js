/**
 * Checks if object is empty
 * @returns {boolean}
 */
function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function getSubObject(obj, from, size) {
  if (typeof obj !== 'object' && obj === null) {
    return {};
  }
  const objLength = Object.keys(obj).length;
  const newObj = {};
  let i = from;
  let j = size;
  console.log('', i, objLength, j, size);
  for (i = from, j = 0; i < objLength && j < size; i++, j++) {
    newObj[Object.keys(obj)[objLength - (i + 1)]] = Object.values(obj)[objLength - (i + 1)];
  }
  return newObj;
}

export default {
  isEmpty,
  getSubObject
};
