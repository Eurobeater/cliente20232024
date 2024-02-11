import { CatPipe } from './cat.pipe';

describe('CatPipe', () => {
  it('create an instance', () => {
    const pipe = new CatPipe();
    expect(pipe).toBeTruthy();
  });
});
