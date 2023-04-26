import caesarCipher from "./caesarCipher";

test('caesarCipher', () => {
    expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
    // from z to a
    expect(caesarCipher('defend the east wall of the castle', 7)).toBe('klmluk aol lhza dhss vm aol jhzasl');
    // keep case
    expect(caesarCipher('Caesar Cipher is easy to break', 4)).toBe('Geiwev Gmtliv mw iewc xs fvieo');
    // punctuation
    expect(caesarCipher(`It's the economy, stupid!`, 6)).toBe(`Oz'y znk kiutuse, yzavoj!`);
});