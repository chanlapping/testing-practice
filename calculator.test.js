import Calculator from "./calculator";

test('calculator', () => {
    const calculator = new Calculator();
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.subtract(2, 3)).toBe(-1);
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.divide(2, 4)).toBeCloseTo(0.5);
});