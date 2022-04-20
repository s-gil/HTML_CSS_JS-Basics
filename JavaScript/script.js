function Dog(name) {
this.name = name;
}

Dog.prototype.bark = function () {
console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Buddy", "Max");
console.log(max)
// max.bark();