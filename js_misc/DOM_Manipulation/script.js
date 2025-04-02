//selecting an element in document, if selecting by id then do "#id" and for class ".class"

// document.getElementById("id");       // Select by ID
// document.getElementsByClassName("class");  // Select by class (returns a collection)
// document.getElementsByTagName("tag");  // Select by tag (returns a collection)
// document.querySelector("selector");   // Select first match (CSS-style)
// document.querySelectorAll("selector"); // Select all matches (NodeList)

var heading = document.querySelector("h1");
console.log(heading);


//changing inner html of an element DOM manipulation
setTimeout(()=>{
    heading.innerHTML = "You will see a clock now";
    //or
    // heading.innerText = "New Text";   // Changes visible text
    // heading.textContent = "Text";  // Changes text without parsing HTML
}, 2000);
console.log(heading);

//modifying attributes
heading.setAttribute("class", "heading-class"); 
heading.getAttribute("class");
heading.removeAttribute("class");

//modifying CSS
setTimeout(()=>{
    heading.style.color = "red";
}, 5000);

//creating and adding elements
let clock = document.createElement("div");
clock.setAttribute("id", "clock-div");
document.body.appendChild(clock);
let formatDate = function(i){
    if(i < 10)
        return "0" + i;
    return i;
}

setTimeout(()=>{
    let clockFn = function(){
        let time = new Date();
        let hr = formatDate(time.getHours());
        let min = formatDate(time.getMinutes());
        let sec = formatDate(time.getSeconds());
        clock.innerText = `${hr}:${min}:${sec}`;
        setTimeout(()=>{
            clockFn();
        }, 1000);
    }
    clockFn();
}, 7000);

