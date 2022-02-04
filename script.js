var vasya = {
  name: "Vasiliy",
  lastName: "Petrovskiy",
  age: 25,
  greet: function() {
    document.write(`Hello, my name is ${this.name}!`);
  }
}
vasya.greet();

// 1. Call 'greet' method multiple times.
// 2. Include age in the greeting.
// 3. Try chaging name and age.
// 4. Create method 'bye'.