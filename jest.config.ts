import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: './',
    clearMocks: true,
    roots: ['<rootDir>/src/tests'],
};

export default config;
