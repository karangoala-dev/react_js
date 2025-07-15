let arr = ["apple", "banana", "grapes", "banana", "apple", "apple"];
let map = {};
arr.forEach((word) => {
    if(map[word]){
        console.log(word);
        map[word]++;
    }
    else{
        map[word] = 1;
    }
});

console.log(map);

//Reduce
let arr2 = [1,2,3,4,5];
let acc = 0;
console.log(arr2.reduce((acc, num)=> num * acc));
