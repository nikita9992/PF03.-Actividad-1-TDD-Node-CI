import { describe, it, expect } from 'vitest';
import {fibonacci} from '../src/fibonacci.js'

describe('fibonacci', () => {
  it('debería lanzar RangeError si n < 0', () => {
    expect(() => fibonacci(-1)).toThrow(RangeError);
    expect(() => fibonacci(-5)).toThrow(RangeError);
  });

  it('debería devolver 0 si n = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('debería devolver 1 si n = 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('debería devolver 1 si n = 2', () => {
    expect(fibonacci(2)).toBe(1);
  });

  it('debería devolver 5 si n = 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  it('debería devolver 13 si n = 7', () => {
    expect(fibonacci(7)).toBe(13);
  });
});