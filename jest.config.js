import { defaults } from 'jest-config';

/** @type {import('jest').Config} */
export default {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
  testEnvironment: 'jsdom',
};
