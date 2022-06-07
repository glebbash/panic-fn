import { panic } from './panic';

describe('panic', () => {
  it('throws error with message', () => {
    const message = 'oops';
    expect(() => panic(message)).toThrow(new Error(message));
  });
  it('throws error with message', () => {
    const error = new Error('oops');
    expect(() => panic(error)).toThrow(error);
  });
});