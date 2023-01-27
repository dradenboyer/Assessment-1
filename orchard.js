///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0;
for (i = 0; i < fujiAcres.length; i++){
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}
console.log(totalAcres)

// "Comment" Made totalAcres = 0 as a counter. Followed intruction and made a for loop that enabled me to add each of the arrays together and made that number = totalAcres. Then just console logged to check work.


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = 0;

averageDailyAcres = totalAcres / 7;

console.log(averageDailyAcres)

//"Comment" Made averageDailyAcres = 0, then proceeded to make it = to total acres divided by 7, because averages are the sum of all numbers divided by how many numbers we used which in this case was 7 for each day of the week.

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while(acresLeft > 0){
    if(acresLeft -= averageDailyAcres){
        days+= 1
        console.log(`It is now day ${days}`)
    }
}

console.log(days)

// "Comment" Using the while loop I made it so it would run as long as acresLeft was above 0
// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
let fujiTons = fujiAcres.slice()
let galaTons = galaAcres.slice()
let pinkTons = pinkAcres.slice()


for(i = 0; i < fujiTons.length; i++){
    fujiTons[i] = fujiTons[i] *6.5
    console.log(fujiTons[i])
}
for(i = 0; i < galaTons.length; i++){
    galaTons[i] = galaTons[i] * 6.5
    console.log(galaTons[i])
}
for(i = 0; i < pinkTons.length; i++){
    pinkTons[i] = pinkTons[i] * 6.5
    console.log(pinkTons[i])
}
    

    








// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for(i = 0; i < fujiTons.length; i++){
    fujiTons[i] = fujiTons[i] * 2000
    fujiPounds += fujiTons[i]
}
console.log(fujiPounds)

for(i = 0; i < galaTons.length; i++){
    galaTons[i] = galaTons[i] * 2000
    galaPounds += galaTons[i]
}
console.log(galaPounds)

for(i = 0; i < pinkTons.length; i++){
    pinkTons[i] = pinkTons[i] * 2000
    pinkPounds += pinkTons[i]
}
console.log(pinkPounds)


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
// const fujiPrice = .89 
// const galaPrice = .64
// const pinkPrice = .55



let fujiProfit = fujiPounds
let galaProfit = galaPounds
let pinkProfit = pinkPounds

fujiProfit = fujiPounds * fujiPrice
console.log(`The fuji apples profited ${fujiProfit} dollars`)

galaProfit = galaPounds * galaPrice
console.log(`The gala apples profited ${galaProfit} dollars`)

pinkProfit = pinkPounds * pinkPrice
console.log(`The pink apples profited ${pinkProfit} dollars`)

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(`This is the total profit ${totalProfit} dollars`)