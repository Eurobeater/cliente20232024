import { PipeCatPipe } from './pipe-cat.pipe';

describe('PipeCatPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeCatPipe();
    expect(pipe).toBeTruthy();
  });
});
