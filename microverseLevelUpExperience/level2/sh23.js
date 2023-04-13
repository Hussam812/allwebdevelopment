/*
Exercise 7
1- Create an array with numberd from 1 to 10.
2- Create a "for" loop that iterates through the array.
3- Inside the same loop, add an 'if' condition to only show the elments.
        bigger than 4. Test it to see that it works 
4- Remove the "if" condition so that all the element sshow.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i =0; i < arr.length; i++){
    if(arr[i] > 4){
        console.log(arr[i]);
    };
};


console.log("------------")
for(let i =0; i < arr.length; i++){
    
    console.log(arr[i]);

};