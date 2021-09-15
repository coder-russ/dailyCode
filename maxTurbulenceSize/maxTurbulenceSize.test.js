const maxTurbulenceSize = require('./maxTurbulenceSize');

describe('Turbulent Count', () => {
  it('should be a function', () => {
    expect(typeof maxTurbulenceSize).toBe('function');
  });

  it('should return a number', () => {
    const result = maxTurbulenceSize('');
    expect(typeof result).toBe('number');
  });

  it('should return 0', () => {
    const result = maxTurbulenceSize([]);
    expect(result).toBe(0);
  });

  it('should return 5', () => {
    const result = maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]);
    expect(result).toBe(5);
  });

  it('should return 2', () => {
    const result = maxTurbulenceSize([4, 8, 12, 16]);
    expect(result).toBe(2);
  });

  it('should return 1', () => {
    const result = maxTurbulenceSize([100]);
    expect(result).toBe(1);
  });

  it('if all numbers are the same, should return 1', () => {
    const result = maxTurbulenceSize([100, 100, 100, 100]);
    expect(result).toBe(1);
  });
});
