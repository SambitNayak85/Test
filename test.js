function Person(first,last, age) {
  this.first = first;
  this.last =last;
  this.age = age;
}

Person.prototype.fullName = function() {
    console.log("inside fullname");
  return this.first + ' ' + this.last;
};

// Define an object
var per = new Person("Sambit","nayaK", 24); 
console.log(per.first);
console.log(per.last);
console.log(per.fullName());

var a = ["dog", "cat", "hen"];
a.push("gas");
a.push("tas");
a.push("pas");
a.pop();
console.log(a);

var avg = function() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
};

var sum = function() {
  var sum1 = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum1 += arguments[i];
  }
  return sum1;
};


console.log(avg(10,20,30));
console.log("sum is "+sum(10,avg(10,20,30)));

function makeSub(a){
    return function(b){
     return a-b;
    };
}
var x1= makeSub(100);
console.log(x1(3));


    var products =
[
    {"id":1,"name":"Moto","price":12334,"category":"phone"},
    {"id":2,"name":"Sony","price":1255,"category":"tv"},
     {"id":3,"name":"iPhone","price":125445,"category":"phone"},
      {"id":4,"name":"Samsung","price":1255,"category":"tv"}

];

// function filter(arr,type){
   
//     var result = [];
//    if("product"=== type){

//         console.log(type);
//       for(var i = 0;i<arr.length;i++){
//           if(arr[i].category==="tv"){
//             result.push(arr[i]);
//           }
//         }
//    }
//    return result;
// }

// var filtered = filter(products,"product");
//console.log(filtered);

function forEach(data,action){
   for(var i = 0;i<data.length;i++){ 
       action(data[i]);
   }
}

// var pred = function isCategory(elem,cat){
//     if(elem.category===cat){
//         return true;
//     }
// };

function filter(predicate,data){
    var results =[];
    forEach(data,function(elem){
        if(predicate(elem)){
            console.log(elem);
           results.push(elem);
        }
    });
    return results;
}

var result = filter(function(elem){
    return elem.category==="tv"},
products);
console.log(result);
console.log("Sam");