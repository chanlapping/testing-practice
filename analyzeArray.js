export default function analyzeArray(arr) {
    const obj = {};
    obj.max = Math.max(...arr);
    obj.min = Math.min(...arr);
    obj.length = arr.length;
    const total = arr.reduce((prev, current) => prev + current);
    obj.average = total / obj.length;
    return obj;
}