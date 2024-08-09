// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number
let user = prompt("Enter a number")
user=parseInt(user)

// Prompt the user for another number that is bigger than the first number and cast it to a number
let user2=prompt("Enter a number greater than the first number inputted")
user2=parseInt(user2)
// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number
for(let i = user;i<=user2;i++){
  console.log(i)
}
// PART 2: Averaging an array
// Create an array of numbers 
let numbers = [9,7,0]

// Write a for loop that calculates the sum of the elements 

let sum=0

for (let i =0;i<numbers.length;i++){
  sum = sum + numbers[i]
  console.log(sum)
}




// Using the sum, calculate the average of all the elements (sum divided by the length of the array)


let average = sum/numbers.length
console.log("Average:",average)