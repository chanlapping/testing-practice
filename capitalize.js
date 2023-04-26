export default function capitalize(str) {
    const firstLetter = str[0];
    return firstLetter.toUpperCase() + str.substring(1);
}