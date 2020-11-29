import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: './',
    clearMocks: true,
    roots: ['<rootDir>/tests'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};

export default config;
