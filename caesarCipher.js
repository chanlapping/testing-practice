const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function caesarCipher(plaintext, shift) {
    let cipher = '';
    for (let chr of plaintext) {
        if (lower.indexOf(chr) > -1) {
            let code = (lower.indexOf(chr) + shift) % 26;
            cipher += lower[code];
        } else if (upper.indexOf(chr) > -1) {
            let code = (upper.indexOf(chr) + shift) % 26;
            cipher += upper[code];
        } else {
            cipher += chr;
        }
    }
    return cipher;
}