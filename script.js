var vasya = {
  name: "Vasiliy",
  lastName: "Petrovskiy",
  age: 22,
  hobbies: {
    art: "drawing, singing",
    display: function() {
      document.write(`I love ${this.art}.`);
    },
  },

  greet: function() { //method
    document.write(`Hello, my name is ${this.name}! I'm ${this.age} years old.`);
    
    
  }
}
vasya.greet();
vasya.hobbies.display();



// 1. Call 'greet' method multiple times.
// 2. Include age in the greeting.
// 3. Try chaging name and age.
// 4. Create method 'bye'.









// document.body.style.background  = "red";
// document.body.textContent = 'Hello world'