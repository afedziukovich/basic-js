const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("arr of the Array!");
  const result = [];
  const discardNext = new Set();
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (discardNext.has(i)) continue;
    if (current === '--discard-next') {
      discardNext.add(i + 1);
    } else if (current === '--discard-prev') {
      if (i > 0 && !discardNext.has(i - 1)) result.pop();
    } else if (current === '--double-next') {
      if (i < arr.length - 1) result.push(arr[i + 1]);
    } else if (current === '--double-prev') {
      if (i > 0 && !discardNext.has(i - 1)) result.push(result[result.length - 1]);
    } else {
      result.push(current);
    }
  }
  return result;
}

module.exports = {
  transform
};
