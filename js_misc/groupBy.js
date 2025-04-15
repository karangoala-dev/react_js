//Object.groupBy is not compatible in the local machine, so use this 

let users = [
    { "name": "Alice", "age": 25 },
    { "name": "Bob", "age": 30 },
    { "name": "Charlie", "age": 22 },
    { "name": "Diana", "age": 25 },
    { "name": "Ethan", "age": 35 },
    { "name": "Fiona", "age": 30 },
    { "name": "George", "age": 28 },
    { "name": "Hannah", "age": 22 },
    { "name": "Ian", "age": 30 },
    { "name": "Julia", "age": 35 },
    { "name": "Kevin", "age": 25 },
    { "name": "Luna", "age": 28 },
    { "name": "Mike", "age": 22 },
    { "name": "Nina", "age": 35 },
    { "name": "Oscar", "age": 30 }
];  

let result = {};

users.forEach((item)=>{
    if(!result[item.age]){
        result[item.age] = [];
    }
    result[item.age].push(item.name);
})

console.log(result);