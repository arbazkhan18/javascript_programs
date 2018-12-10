function createObjects(name,age,designation,place){
  //  var myObject = {}
    this.name = name
    this.age = age
    this.designation = designation
    this.place = place
    this.cost = function(){
        this.age+= 3
    }   
 //   return myObject
}
var emp1 =  new createObjects("arbaz",21,'developer','mountBlue')
//var emp2 =  createObjects("john",22,'engineer','bangalr9oe')
//onsole.log(emp1)

function foo(){}
console.log(foo.prototype)

