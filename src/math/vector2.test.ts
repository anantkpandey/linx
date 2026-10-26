import { describe, expect, it } from 'vitest';
import { add, dot, magnitude, scale } from './vector2';

describe('Vector2 operations', () => {
  it('adds two vectors', () => {
    expect(add({ x: 1, y: 2 }, { x: 3, y: 4 }))
      .toEqual({ x: 4, y: 6 });
  });

  it('scales a vector', () => {
    expect(scale({ x: 2, y: 3 }, 2))
      .toEqual({ x: 4, y: 6 });
  });

  it('calculates the dot product', () => {
    expect(dot({ x: 1, y: 2 }, { x: 3, y: 4 }))
      .toBe(11);
  });

  it('calculates vector magnitude', () => {
    expect(magnitude({ x: 3, y: 4 })).toBe(5);
  });
});