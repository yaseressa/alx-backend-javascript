export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    let value = array[idx];
    array.shift();
    array.push(appendString + value);
  }

  return array;
}
