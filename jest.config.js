import { TextEncoder, TextDecoder } from "util";
import { transform } from "@babel/core";
import * as jestPreset from "babel-preset-jest";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// const {transform} = require('@babel/core');
// const jestPreset = require('babel-preset-jest');

// jest.mock('react', () => {
//   // Require the original module to not be mocked...
//   const originalModule = jest.requireActual('../myModule');

//   return {
//     __esModule: true, // Use it when dealing with esModules
//     ...originalModule,
//     getRandom: jest.fn(() => 10),
//   };
// });
/** @type {import("jest").Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  transform: {},
  testRegex: ".*.test\\.m?jsx?$",
  moduleFileExtensions: ["js", "json", "jsx", "mjs"],
  extensionsToTreatAsEsm: [".jsx"],
};

export default config;
