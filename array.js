//concatenation of two array

let arr1=["abc",1,2,3.4]
let arr2=["A","B","C","D"]
let arr3=arr1.concat(arr2)
console.log("Concatenation of two array")
console.log(arr3)

//constructor using an array
let vegetables = ["Tomato", "Cucumber", "Carrot", "Raddish"]
 vegetables[2]=["Ladys finger","Cabbage"];

let arr4 = vegetables.constructor
console.log("constructor using an array")
console.log(arr4)
console.log(vegetables)

//copyWithin method using an array
console.log("CopyWithin method using an array")
console.log(arr1.copyWithin(2,0,2))

//Entries method using an array
console.log("Entries method using an array")
for (let a of arr1.entries()) {
    console.log(a)
}

//Every method returns true or flase
console.log("Every method returns true or flase")
arr5=arr1.every(checkTrueorfalse)
function checkTrueorfalse(arr5)
{
    return arr5>2;
}
console.log(arr5)


//Fill Method using an array
console.log("Fill Method using an array")
console.log(arr1.fill("Greens",1,3))

//Filter Method using an array
console.log("Filter Method using an array")
let a=[12,29,23,45]
console.log(a.filter(b=> b%12==0))

//Find Method using an array
console.log("Find Method using an array")
let arr6=[1,7,29,89]
b=arr6.find(checkequal)
function checkequal(b){
    return b==29;
}
console.log(b)

//Find index method using an array
console.log("Find index method using an array")
let arr7=[78,98,56,1]
console.log(arr7.findIndex(c=> c==1))

//Foreach method using an array
console.log("Foreach method using an array")
arr7.forEach(function(value){
console.log(value/4);
});

//From method using an array
console.log("From method using an array")
let arr8='swathi';
console.log(Array.from(arr8))

//Includes method using an array
console.log("Includes Method using an array")
console.log(vegetables.includes("Tomato",4))

//indexOf method using an array
console.log("indexOf method using an array")
console.log(vegetables.indexOf("Cucumber"))

//isArray method using an array
console.log("isArray method using an array")
console.log(Array.isArray(arr1))

//join method using an array
console.log("join method using an array")
console.log(vegetables.join())

//Keys method using an array
console.log("Keys method using an array")
let d="";
let fruits1=["Apples","Banana","Cherry","Orange"]
for (let e of fruits1.keys()  ){
    console.log(e)
}
  //lastIndexOf method using an array

  console.log("lastIndexOf method using an array")
  console.log(fruits.lastIndexOf("Orange"))


  //Find the length using an array
  console.log("The length using an array")
  console.log(fruits.length)

//map method using an array
console.log("Map method using an array")
let arr10=arr7.map(add1);
function add1(s){
    return u=s+10;
}
console.log(u)
//Pop the element using an array
console.log("Pop the element using an array")
console.log(arr7.pop())

//Push the element using an array
let fruits=["apple","cherry"]
console.log("Push the element using an array")
fruits.push("Lemon","kiwi")
console.log(fruits)


//Reduce the element using an array
console.log("Reduce the element using an array")
v=[1,2,3,4,5]
v.reduce(add)
function add(a,b){
   return a+b;
}
console.log(v)

//ReduceRight the element using an array
console.log("ReduceRight the element using an array")
v.reduceRight(sub)
function sub(a,b){
   return a-b;
}
console.log(v)

//Reverse the element using an array
console.log("Reverse the element using an array")
console.log(v.reverse())

//shift the element using an array
console.log("Shift the element using an array")
v.shift()
console.log(v)

//slice the element using an array
console.log("Slice the element using an array")
console.log(fruits.slice(1,3))

//some method returns true or flase
console.log("some method returns true or flase")
arr5=v.some(checkTrueorfalse)
function checkTrueorfalse(arr5)
{
    return arr5>2;
}
console.log(arr5)

//sort the element using an array
console.log("sort the element using an array")
fruits.sort (function(a,b){
    return  a-b;
});
console.log(fruits)


//splice the element using an array
console.log("splice the element using an array")
fruits.splice(2,1)
console.log(fruits)

//toString the element using an array
console.log("toString the element using an array")
let tostring=fruits.toString()
console.log(tostring)

//unshift the element using an array
console.log("unshift the element using an array")
fruits.unshift("Lemon","Banana","Orange")
console.log(fruits)

//valueof the element using an array
console.log("valueof the element using an array")
fruits.valueOf()
console.log(fruits)
