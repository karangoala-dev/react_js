const json = {
  "Profile": {
    "component": "Profile",
    "name": "John Doe",
    "age": 25,
    "email": "abcde@gmail.com",
    "gender": "male"
  },
  "Interests": {
    "component": "Interests",
    "interests": ["Coding", "Football"]
  },
  "Settings": {
    "component": "Settings",
    "darkMode": true
  }
}

const arr = Object.keys(json);
console.log(arr.includes("Interests"));