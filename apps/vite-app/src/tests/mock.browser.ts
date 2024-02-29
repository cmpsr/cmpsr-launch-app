import { setupWorker } from 'msw/browser';
import { healthMockHandler } from './handlers/health.mock.handler';

const handlers = [healthMockHandler];

export const worker = setupWorker(...handlers);
