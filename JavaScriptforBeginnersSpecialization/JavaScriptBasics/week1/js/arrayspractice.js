var animals = ["cat", "dog", "chicken"];
console.log("animals = ["+animals+']');
animals.push('llama');
console.log("animals.push('llama') = ["+animals+']');
console.log("animals[2] = "+ animals[2]);

console.log("animals.splice(1, 1) = "+ animals.splice(1, 1));
console.log("animals after splice = ["+animals+"]");
animals.push('dog')
console.log("sorting animlas = [" +animals.sort()+']');
