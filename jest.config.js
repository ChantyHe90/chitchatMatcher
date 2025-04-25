import { defaults } from 'jest-config';

/** @type {import('jest').Config} */
export default {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mjs'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.mjs'],
};
// export default {
//   testEnvironment: 'jsdom',
//   testMatch: ['**/*.test.mjs'],
//   transform: {},
// };
