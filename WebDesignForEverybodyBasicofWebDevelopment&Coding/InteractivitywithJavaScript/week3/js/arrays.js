var fruits = ["banana", "Orange", "Apple", "Mango"]

function loadFruits(){
    document.getElementById('fruits').innerHTML = fruits;
}

function myfunction(){
    var fruit = prompt('What is your favorite fruite?');
    fruits[fruits.length] = fruit;
    document.getElementById('fruits').innerHTML = fruits;
}