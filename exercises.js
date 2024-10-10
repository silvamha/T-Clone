import { tweetsData } from "./data.js";

const testDestructuring = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
    }
}

const { firstName, lastName, age, address: { city } } = testDestructuring

console.log(firstName, lastName, age, city)

for (let test in testDestructuring) {
    console.log(firstName, lastName, age, city)
}


// Help me create a .forEach() 


// Original Array
const numbers = [1, 2, 3, 4, 5];

const newArrayForEach = []

const newArrayMap =[]

// .forEach() method
numbers.forEach((num =>{
    // Populate new array
return newArrayForEach.push(num)
}))

// Log new array using .forEach()
console.log(newArrayForEach)

// .map() method
newArrayForEach.map((n =>{
    // How is this different than .forEach()?
    // Populate new array
    return newArrayMap.push(n)
}))

// Log new array using .map()
console.log(newArrayMap)

const fruits = ['apple', 'banana', 'orange'];

const newFruits =[]

fruits.forEach((fruit =>{

return newFruits.push(fruit)

}))


console.log(newFruits)

console.log(tweetsData)

tweetsData.forEach((tweet =>{
    console.log(tweet.replies.length)
    if(tweet.replies.length >0){
        tweet.replies.forEach((reply) =>{
            console.log(`${reply.handle} ${reply.profilePic} ${reply.tweetText}`)
        })
    }
}))

// Work on complex .reduce() method


// Rnder the tweets
