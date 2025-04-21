let key = "username";

//here "key" is the key value itself
const obj1 = {
    key: "abcde"
}

//here key is the value of variable key
const obj2 = {
    [key]: "abcde"
}

console.log(obj1);
console.log(obj2);

//OUTPUT
// obj1 -> { key: 'abcde' }
// obj2 -> { username: 'abcde' }