// var vasya = {
//   name: "Vasiliy",
//   lastName: "Petrovskiy",
//   age: 22,
//   hobbies: {
//     art: "drawing, singing",
//     display: function() {
//       document.write(`I love ${this.art}.`);
//     },
//   },

//   greet: function() { //method
//     document.write(`Hello, my name is ${this.name}! I'm ${this.age} years old.`);
    
    
//   }
// }
// vasya.greet();
// vasya.hobbies.display();



// 1. Call 'greet' method multiple times.
// 2. Include age in the greeting.
// 3. Try chaging name and age.
// 4. Create method 'bye'.









// // document.body.style.background  = "red";
// document.body.textContent = 'Hello world'

// getElementById
// let helloWorldDiv = document.getElementById("hello-world");

// helloWorldDiv.textContent = "Nice to meet you!";
// helloWorldDiv.style.background = "green";
// helloWorldDiv.style.color = "white";
// helloWorldDiv.style.textDecoration = "underline";
// helloWorldDiv.style.fontSize = "20px";

// // getElementsByTagName

// let allParagraphs = document.getElementsByTagName("p");

// for (let paragraph of  allParagraphs) {
//   paragraph.style.backgroundColor = "blue";
// }
// for (let paragraph of  allParagraphs) {
//   paragraph.style.fontWeight = "770";
// }
// for (let paragraph of  allParagraphs) {
//   paragraph.style.color = "white";
// }

// // getElementByClassName

// let allHelloWorlds = document.getElementsByClassName("hello-world");
// for (let helloWorld of allHelloWorlds) {
// helloWorld.style.fontStyle = "italic";
// helloWorld.style.background = "yellow";
// helloWorld.style.color = "red";
// }

// // querySelectorAll

// let helloWorld2 = document.querySelector("#hello-world");
// helloWorld2.style.backgroundColor = "purple";

// let allHelloWorlds2 = document.querySelectorAll(".hello-world");

// for (let helloWorld of allHelloWorlds2) {
//   helloWorld.style.fontSize = "5px";
// }












// examples
let example = document.querySelector("#example");
example.style.backgroundColor = "green";

let allExamples2 = document.querySelectorAll(".example");

for (let example of allExamples2) {
  example.style.color = "red";
}

// getElementByClassName example

let allExamples = document.getElementsByClassName("example");
for (let example of allExamples) {
example.style.fontWeight = "700";
example.style.background = "pink";
example.style.color = "purple";
}

// // getElementsByTagName

let allArticles = document.getElementsByTagName("article");

for (let article of  allArticles) {
  article.style.backgroundColor = "blue";
}
for (let article of  allArticle) {
  article.style.fontStyle = "it";
}
for (let article of  allArticle) {
  article.style.color = "white";
}