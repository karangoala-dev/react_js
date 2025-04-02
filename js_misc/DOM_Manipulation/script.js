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
    heading.innerHTML = "Changed";
    //or
    // heading.innerText = "New Text";   // Changes visible text
    // heading.textContent = "Text";  // Changes text without parsing HTML
}, 2000);
console.log(heading);