import { repeatWord } from "./script.js";

describe('test repeatWord', () => {
  it('repead n word', () => {
    expect(repeatWord('слово', 3)).toBe('слово1, слово2, слово3, ');
    expect(repeatWord('слово', 5)).toBe('слово1, слово2, слово3, слово4, слово5, ');
    expect(repeatWord('слово', 1)).toBe('слово1, ');
  });
});