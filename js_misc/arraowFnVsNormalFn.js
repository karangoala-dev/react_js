//Arrow fn will always consider the global scope as it's scope.
//Normal fn will consider its current scope as it's scope

let firstName = "Scooby";

let object = {
    name: "Karan Goala",
    greetingNormalFn: function(){
        console.log("Hello : " + this.name);
    },
    greetingArrowFn: ()=>{
        console.log("This will be undefined : " + this.name);
        console.log("This will have value : " + firstName);
    }
};
console.log("Normal fn");
object.greetingNormalFn();
console.log("Arrow fn");
object.greetingArrowFn();