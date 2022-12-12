// -------------------TOPIC: ARRAY------------------------
// var friend1="Karim";
// var friend1="Rahim";

// ------------------OR (We can write in this way as well)--------------

// var friendsName=["Karim", "Rahim", "Kashem"]

// ---------------------Length----------------------

// var friendsName=["Karim", "Rahim", "Kashem"];
// var playersAge=[18,20,30];

// var matchFee = [3000, 5000, 6000];

// var playersName=["Tarim", "FDahim", "Aashem"];
// var vowels = ['a', 'b', 'c'];
// console.log(playersAge.length);

// ---------------------ELEMENT POSITION E KE ASE?----------------------

// var friendsName=["Karim", "Rahim", "Kashem"];
// var playersAge=[18,20,30];

// var matchFee = [3000, 5000, 6000];

// var playersName=["Tarim", "FDahim", "Aashem"];
// var vowels = ['a', 'b', 'c'];

// console.log(playersAge.indexOf(20));

// ---------------------AI POSITION E KE ASE?----------------------

// var friendsName=["Karim", "Rahim", "Kashem"];
// var playersAge=[18,20,30];
// console.log(playersAge[1]); //-----NEW LINE ADDED-----
// var matchFee = [3000, 5000, 6000];

// var playersName=["Tarim", "FDahim", "Aashem"];
// var vowels = ['a', 'b', 'c'];

// ---------------------REPLACEMENT----------------------

// var friendsName=["Karim", "Rahim", "Kashem"];
// var playersAge=[18,20,30];
// playersAge[2]=37; //-----NEW LINE ADDED-----
// console.log(playersAge); //-----NEW LINE ADDED-----
// var matchFee = [3000, 5000, 6000];

// var playersName=["Tarim", "FDahim", "Aashem"];
// var vowels = ['a', 'b', 'c'];

// ---------------------How to REMOVE or ADD an ELEMENT ----------------------

// var numbers=[78, 45, 254, 232, 32];
// numbers.push(80) //----ADD----

// console.log(numbers);

// var numbers=[78, 45, 254, 232, 32];
// numbers.pop() //----POP----

// console.log(numbers);

// var numbers=[78, 45, 254, 232, 32];
//console.log(numbers);

// var nums=[25,35]
//  nums.unshift(99)
// nums.shift();

// console.log(nums);


// --------------------- Simple Array ----------------------

// var myArray=['A','B','C']

// ------------- OR -----------------

// var myArrayPro= new Array('A','B','C');

// console.log(myArray[1])


// ---------------------  Multidimensional Arrays----------------------

// var Bangladesh=["dhaka", "CTG"]
// var India=["Mumbai", "Pune"]
// var China=["Uhan", "Hongkong"]

// var asia=[Bangladesh,India,China]

// console.log(asia[1][1]);

// ---------------------  Array de-structuring ----------------------

// var countries=["BAN", "IND", "PAK"]

// var [a,,b]=countries

// console.log(b);

// --------------------- MAP ----------------------

// var myMap= new Map();

// myMap.set('Key1', 'Bangladesh')
// myMap.set('Key2', 'INDIA')
// myMap.set('Key3', 'CHINA')
// myMap.set('Key4', 'CANADA')
// myMap.set('Key5', 'DENMARK')

// console.log(myMap.values());

// var myMap= new Map();

// myMap.set("Key1", "Bangladesh")
// myMap.set("Key2", "INDIA")
// myMap.set("Key3", "CHINA")
// myMap.set("Key4", "CANADA")
// myMap.set("Key5", "DENMARK")

// console.log(myMap.Keys())


// ---------------------Loop for Map Values & Keys ----------------------

// var myMap= new Map();

// myMap.set('Key1', 'Bangladesh')
// myMap.set('Key2', 'INDIA')
// myMap.set('Key3', 'CHINA')
// myMap.set('Key4', 'CANADA')
// myMap.set('Key5', 'DENMARK') 

// for (let mykey of myMap.keys()){
//     console.log(mykey);
// }

// ---------------------delete,get,clear,has ----------------------

// var myMap= new Map();

// myMap.set('Key1', 'Bangladesh')
// myMap.set('Key2', 'INDIA')
// myMap.set('Key3', 'CHINA')
// myMap.set('Key4', 'CANADA')
// myMap.set('Key5', 'DENMARK') 

// myMap.delete("Key1")
// myMap.delete("Key4")

// for (let myvalue of myMap.values()){

//     console.log(myvalue);
// }

// var myMap= new Map();

// myMap.set('Key1', 'Bangladesh')
// myMap.set('Key2', 'INDIA')
// myMap.set('Key3', 'CHINA')
// myMap.set('Key4', 'CANADA')
// myMap.set('Key5', 'DENMARK') 

// myMap.clear();

// for (let myvalue of myMap.values()){

//     console.log(myvalue);
// }

// var myMap= new Map();

// myMap.set('Key1', 'Bangladesh')
// myMap.set('Key2', 'INDIA')
// myMap.set('Key3', 'CHINA')
// myMap.set('Key4', 'CANADA')
// myMap.set('Key5', 'DENMARK') 

// console.log(myMap.get("key2"));

// for (let myvalue of myMap.values()){

//     console.log(myvalue);
// }

// if (myMap.has("Key1")){
//     console.log("YES");
// } else {
//     console.log ("NO");
// }

// ---------------------SET----------------------

// var mySet=new Set();

// mySet.add("Bangladesh");
// mySet.add("INDIA");
// mySet.add("Bangladesh");
// mySet.add("INDIA");
// mySet.add("Bangladesh");
// mySet.add("NEPAL");
// mySet.add("Bhutan");

// console.log(mySet);