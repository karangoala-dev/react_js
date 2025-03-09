const throttle = function(fn, delay){
    let lastCall = 0;
    return function(...args){
        let currentTime = Date.now();
        if(currentTime - lastCall < delay){
            return;
        }
        lastCall = currentTime;
        fn(...args);
    }
}

const printMessage = function(msg){
    console.log("Printing : " + msg);
}

const throttledPrintMessage = throttle(printMessage, 2 * 1000);

//This runs since first call.
setTimeout(()=>{
    throttledPrintMessage("Hello")
}, 1000);
//This wont run since 500mS passed only since prev call. But this will update lastCall to 1500mS
setTimeout(()=>{
    throttledPrintMessage("Hello W")
}, 1500);
//This will run since 2seconds has passed since fn call throttledPrintMessage("Hello W")
setTimeout(()=>{
    throttledPrintMessage("Hello World")
}, 3500);