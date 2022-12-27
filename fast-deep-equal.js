const hasElementType = typeof Element !== "undefined";
const hasMap = typeof Map === "function";
const hasSet = typeof Set === "function";
const hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;

/**
 * Returns whether two values are equal.
 * @param {any} a - The first value to compare.
 * @param {any} b - The second value to compare.
 * @param {WeakSet} visited - A set of objects that have already been visited during the comparison to prevent circular references.
 * @return {boolean} Whether the two values are equal.
 * 
 * @description
 * 
 * 1. If a and b are the same value, return true.
 * 2. If a and b are both objects, proceed to the next step. Otherwise, return false.
 * 3. If either a or b has already been visited, return true.
 * 4. Add a and b to the visited set.
 * 5. If a and b have different constructors, return false.
 * 6. If a and b are arrays, proceed to the next step.
 *    If a and b are Maps, proceed to the next step.
 *    If a and b are Sets, proceed to the next step.
 *    If a and b are ArrayBuffers, return whether they have the same length and elements.
 *    If a and b are RegExps, return whether they have the same source and flags.
 *    If a and b have different valueOf or toString methods, return whether those methods return the same value for both objects.
 * 7. If a and b have different numbers of keys, return false.
 * 8. For each key in a, if it doesn't exist in b or the values for the key are not equal, return false.
 * 9. Return true.
 */
module.exports = function equal(a, b, visited = new WeakSet()) {
  if (a === b) {
    return true;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (visited.has(a) || visited.has(b)) {
      return true;
    }
    visited.add(a);
    visited.add(b);
    if (a.constructor !== b.constructor) {
      return false;
    }
    let length;
    let i;
    let keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) {
        return false;
      }
      for (i = length; i-- !== 0; ) {
        if (!equal(a[i], b[i], visited)) {
          return false;
        }
      }
      return true;
    }
    let it;
    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) {
        return false;
      }
      it = a.entries();
      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) {
          return false;
        }
      }
      it = a.entries();
      while (!(i = it.next()).done) {
        if (!equal(i.value[1], b.get(i.value[0]), visited)) {
          return false;
        }
      }
      return true;
    }
    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) {
        return false;
      }
      it = a.entries();
      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) {
          return false;
        }
      }
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) {
        return false;
      }
      for (i = length; i-- !== 0; ) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
    if (a.constructor === RegExp) {
      return a.source === b.source && a.flags === b.flags;
    }
    if (a.valueOf !== Object.prototype.valueOf) {
      return a.valueOf() === b.valueOf();
    }
    if (a.toString !== Object.prototype.toString) {
      return a.toString() === b.toString();
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    if (hasElementType && a instanceof Element) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (
        (keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") &&
        a.$$typeof
      ) {
        continue;
      }
      if (!equal(a[keys[i]], b[keys[i]], visited)) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
};
