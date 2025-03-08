//This function will return the debounced version of any provided function
const debounce = function(fn, delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn(...args)
        }, delay);
    }
}

const search = function(query){
    console.log("Searching for : " + query);
}

const debouncedSearch = debounce(search, 100);

debouncedSearch("H");
debouncedSearch("HE");
debouncedSearch("HEL");
debouncedSearch("HELL");
debouncedSearch("HELLO");