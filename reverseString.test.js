import reverseString from "./reverseString";

test('reverse string', () => {
    expect(reverseString('abcde')).toBe('edcba');
});