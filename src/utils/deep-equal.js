/**
 * Returns whether two values are equal.
 *
 * 1. If a and b are the same value, return true.
 * 2. If a and b are both objects, proceed to the next step. Otherwise, return false.
 * 3. If either a or b has already been visited, return true.
 * 4. Add a and b to the visited set.
 * 5. If a and b have different constructors, return false.
 * 6. If a and b are arrays, proceed to the next step. If a and b are Maps, proceed to the next step. If a and b are Sets, proceed to the next step. If a and b are ArrayBuffers, return whether they have the same length and elements. If a and b are RegExps, return whether they have the same source and flags. If a and b have different valueOf or toString methods, return whether those methods return the same value for both objects.
 * 7. If a and b have different numbers of keys, return false.
 * 8. For each key in a, if it doesn't exist in b or the values for the key are not equal, return false.
 * 9. Return true.
 *
 * @param {any} a - The first value to compare.
 * @param {any} b - The second value to compare.
 * @param {WeakSet} visited - A set of objects that have already been visited during the comparison to prevent circular references.
 * @returns {boolean} Whether the two values are equal.
 */
const equal = (a, b, visited = new WeakSet()) => {
  if (a === b) {
    return true;
  }

  const aType = Object.prototype.toString.call(a);
  const bType = Object.prototype.toString.call(b);

  if (aType !== bType) {
    return false;
  }
  if (aType === "[object Number]") {
    if (Number.isNaN(a) && Number.isNaN(b)) {
      return true;
    }
    return false;
  }
  if (!a || !b || typeof a !== "object" || typeof b !== "object") {
    return false;
  }
  if (visited.has(a) || visited.has(b)) {
    return true;
  }
  visited.add(a);
  visited.add(b);

  if (a.constructor !== b.constructor) {
    return false;
  }

  if (
    aType === "[object Array]" ||
    aType === "[object NodeList]" ||
    aType === "[object HTMLCollection]"
  ) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = a.length; i-- !== 0; ) {
      if (!equal(a[i], b[i], visited)) {
        return false;
      }
    }
    return true;
  }

  if (aType === "[object Map]") {
    if (a.size !== b.size) {
      return false;
    }
    for (const [key, value] of a.entries()) {
      if (!b.has(key) || !equal(value, b.get(key), visited)) {
        return false;
      }
    }
    return true;
  }

  if (aType === "[object Set]") {
    if (a.size !== b.size) {
      return false;
    }
    for (const [key] of a.entries()) {
      if (!b.has(key)) {
        return false;
      }
    }
    return true;
  }

  if (
    aType === "[object ArrayBuffer]" &&
    ArrayBuffer.isView(a) &&
    ArrayBuffer.isView(b)
  ) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = a.length; i-- !== 0; ) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  if (/\[object HTML[\w\s]+Element\]/.test(aType)) {
    return a.isEqualNode(b);
  }

  if (aType === "[object RegExp]") {
    return a.source === b.source && a.flags === b.flags;
  }

  if (a.valueOf !== Object.prototype.valueOf) {
    return a.valueOf() === b.valueOf();
  }

  if (a.toString !== Object.prototype.toString) {
    return a.toString() === b.toString();
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aType === "[object Object]") {
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    for (const key in a) {
      if (!(key in b) || !equal(a[key], b[key], visited)) {
        return false;
      }
    }
    return true;
  }

  return false;
};

export { equal as default, equal };
