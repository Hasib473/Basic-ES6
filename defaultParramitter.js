function greet(name) {
  if (name === undefined) {
    name = "Guest";
  }
  console.log("Hello, " + name);
}

greet();        // Hello, Guest
greet("Hasib"); // Hello, Hasib
