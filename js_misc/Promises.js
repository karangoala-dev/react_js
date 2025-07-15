await fetch('https://dummyjson.com/carts')
.then((res)=>res.json())
.then((data)=>console.log(data.carts[0]["discountedTotal"]))
.catch((e)=>console.error(e));

console.log("Now plain")
let promise = await fetch("https://dummyjson.com/carts");
let data = await promise.json();
console.log(data.carts[0]["discountedTotal"]);