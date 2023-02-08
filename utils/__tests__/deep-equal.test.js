// @ts-nocheck
import equal from "../deep-equal.js";
import { JSDOM } from "jsdom";

/**
 * @description Listen, buddy. This code's got it all - the bitter taste of truth, the
 * scorching heat of reality. It's a wild ride, a freak show, a carnival of
 * logic, a feast of comparison.
 * 
 * You see, it starts off easy, with a simple test of identity. Three simple
 * checks, like the beat of a steady drum. But then, the madness begins. It's
 * like jumping into the deep end of a pool filled with acid.
 * 
 * The code takes a hard look at these two beasts, `a` and `b`. It compares them,
 * tooth and nail, like two gunslingers at high noon. And if they don't match, if
 * there's even a hint of difference, it's all over. The code spits out a
 * verdict, a cold, hard `false`.
 * 
 * But if these two critters are equal, if they're the same breed of cat, then
 * the code takes a deep breath and steps back. It stares at them, long and hard,
 * and finally declares, with a grin, that they're true. That they're the real
 * deal. That they're...equal.
 * 
 * So hold on tight, sport. This code's got a mean streak a mile wide. And it's
 * not afraid to use it.
 */

describe("equal", () => {
  beforeEach(() => {
    // Create a new JSDOM instance
    const dom = new JSDOM();
    // Set the global `window` and `document` objects to the ones created by JSDOM
    global.window = dom.window;
    global.document = dom.window.document;
  });

  afterEach(() => {
    // Reset the global `window` and `document` objects after each test
    global.window = undefined;
    global.document = undefined;
  });

  it("should return true for equal primitives", () => {
    expect(equal(true, true)).toBe(true);
    expect(equal(false, false)).toBe(true);
    expect(equal(null, null)).toBe(true);
    expect(equal(undefined, undefined)).toBe(true);
    expect(equal(0, 0)).toBe(true);
    expect(equal(1, 1)).toBe(true);
    expect(equal(-1, -1)).toBe(true);
    expect(equal(NaN, NaN)).toBe(true);
    expect(equal("", "")).toBe(true);
    expect(equal("abc", "abc")).toBe(true);
    expect(equal(Symbol(), Symbol())).toBe(false);
  });

  it("should return false for unequal primitives", () => {
    expect(equal(true, false)).toBe(false);
    expect(equal(null, undefined)).toBe(false);
    expect(equal(0, 1)).toBe(false);
    expect(equal(NaN, 0)).toBe(false);
    expect(equal("", "abc")).toBe(false);
    expect(equal(Symbol(), Symbol())).toBe(false);
  });

  it("should return true for equal objects", () => {
    expect(equal({}, {})).toBe(true);
    expect(equal([], [])).toBe(true);
    expect(equal(new Set([1, 2, 3]), new Set([1, 2, 3]))).toBe(true);
    expect(equal(new Map(), new Map())).toBe(true);
    expect(equal(new Date(), new Date())).toBe(true);
    expect(equal(/abc/, /abc/)).toBe(true);
    const a = { string: "string", number: 123, array: [1, 2, 3] };
    const b = { string: "string", number: 123, array: [1, 2, 3] };
    expect(equal(a, b)).toBe(true);
  });

  it("should return false for unequal objects", () => {
    expect(equal({ a: 1 }, [])).toBe(false);
    expect(equal([], {})).toBe(false);
    expect(equal(new Set(), new Map())).toBe(false);
    expect(equal(new Set([1, 2, 3]), new Set([1, 2, 3]))).toBe(true);
    expect(equal(new Map(), new Set())).toBe(false);
    expect(equal(new Date(), new Date(2000, 1, 1))).toBe(false);
    expect(equal(/abc/, /def/)).toBe(false);

    const a = { string: "string", number: 123, array: [1, 2, 3] };
    const b = { string: "string", number: 123, array: [1, 3, 4] };
    expect(equal(a, b)).toBe(false);
  });

  it("should correctly compare DOM elements", () => {
    // Create DOM elements
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const span = document.createElement("span");

    // Set attributes on the elements
    div1.setAttribute("id", "test");
    div1.setAttribute("class", "foo bar");
    div2.setAttribute("id", "test");
    div2.setAttribute("class", "foo bar");

    // Append the elements to the body
    document.body.appendChild(div1);
    document.body.appendChild(div2);
    document.body.appendChild(span);

    // Compare the elements
    expect(equal(div1, div1)).toBe(true);
    expect(equal(div1, div2)).toBe(true);
    div1.setAttribute("id", "changed");
    expect(equal(div1, div2)).toBe(false);
    expect(equal(div1, span)).toBe(false);
  });

  it("should handle circular references in deeply nested objects", () => {
    const obj1 = {};
    const obj2 = {};
    obj1.a = obj1;
    obj2.a = obj2;
    expect(equal(obj1, obj2)).toBe(true);

    obj1.b = {};
    obj1.b.c = {};
    obj1.b.c.d = obj1;
    obj2.b = {};
    obj2.b.c = {};
    obj2.b.c.d = obj2;
    expect(equal(obj1, obj2)).toBe(true);
  })
});
