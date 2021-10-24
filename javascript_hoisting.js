// GIVEN 1
console.log(hello);
var hello = 'world';
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';

// GIVEN 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// needle = 'haystack';
// function test();
// test();
// var needle;
// needle = 'magnet';
// console.log(needle); // logs magnet

// GIVEN 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.="support methord from-rainbow">log(brendan);
// syntax error from 'console.="support methord from-rainbow">log(brendan);'
// var brendan;
// brendan = 'super cool';
// function print();
// brendan = 'only okay';
// console.log(brendan); // logs nothing because print() is not called

// GIVEN 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food;
// food = 'chicken';
// console.log(food); // logs chicken
// function eat();
// eat();
// var food;
// food = 'gone';
// food = 'half-chicken';
// console.log(food); // logs half-chicken

// GIVEN 5
mean();
console.log(food);
var mean = function(){
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// type error because mean is not a function
// var mean;
// mean();
// mean = function();
// var food;
// food = "fish";
// food = "chicken";
// console.log(food); // logs chicken
// console.log(food); // logs chicken
// console.log(food); // reference error because food is not defined globally
// console.log(food); // reference error because food is not defined globally

// GIVEN 6
console.log(genre);
var genre = "disco";
rewind();
function rewind(){
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre;
// console.log(genre); // undefined
// genre = "disco";
// function rewind();
// rewind();
// var genre;
// genre = "rock";
// console.log(genre); // logs rock
// genre = "r&b";
// console.log(genre); // logs r&b
// console.log(genre); // logs disco

// GIVEN 7
dojo = "san jose";
console.log(dojo);
learn();
function learn(){
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// function learn();
// dojo = "san jose";
// console.log(dojo); // logs san jose
// learn();
// var dojo;
// dojo = "seattle";
// console.log(dojo); // logs seattle
// dojo = "burbank";
// console.log(dojo); // logs burbank
// console.log(dojo); // logs san jose

// GIVEN 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo;
    }
    return dojo;
}

// type error because dojo cannot be updated
// function makeDojo;
// const dojo;
// dojo = {};
// dojo.name = name;
// dojo.students = students;
// if();
// else if();
// return dojo;
// console.log(makeDojo("Chicago", 65)); // logs {name: 'Chicago', students: 65, hiring: true}
// console.log(makeDojo("Berkeley", 0)); // logs {name: 'Berkeley', students: 0}