import { describe, it, expect } from 'vitest';
import { esPinValido } from '../src/esPinValido.js';

describe('esPinValido', () => {
  it('debería devolver false si el pin es null o undefined', () => {
    expect(esPinValido(null)).toBe(false);
    expect(esPinValido(undefined)).toBe(false);
  });

  it('debería devolver false si el pin está vacío', () => {
    expect(esPinValido('')).toBe(false);
  });

  it('debería devolver false si la longitud no es 4 ni 6', () => {
    expect(esPinValido('123')).toBe(false);
    expect(esPinValido('12345')).toBe(false);
    expect(esPinValido('1234567')).toBe(false);
  });

  it('debería devolver false si contiene caracteres que no son dígitos', () => {
    expect(esPinValido('12a4')).toBe(false);
    expect(esPinValido('abcd')).toBe(false);
    expect(esPinValido('1 34')).toBe(false);
  });

  it('debería devolver false si todos los dígitos son iguales', () => {
    expect(esPinValido('1111')).toBe(false);
    expect(esPinValido('000000')).toBe(false);
    expect(esPinValido('7777')).toBe(false);
  });

  it('debería devolver true si el pin cumple todas las reglas', () => {
    expect(esPinValido('1234')).toBe(true);
    expect(esPinValido('987654')).toBe(true);
    expect(esPinValido('102938')).toBe(true);
  });
});