let arr = [1,1,1,2,2,3];

let map = {};

arr.forEach((item)=>{
    if(!map[item]){
        map[item] = 1;
    }
    else{
        map[item]++;
    }
});

console.log(arr);
console.log(map);