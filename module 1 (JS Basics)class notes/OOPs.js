//OOP
//Java 
//Main Pillar:OOP 
//encapsulation,inheritance,polymorphism
//encapsulation:hiding the implementation detaisl
//inheritance:a parent -child relationship, in whicch 
//-child inherits the characteristics of parents 
//polymorphism:one phase many methods

//classes and Objects
//Constructor
//Methods
//accessing

//Classes:it is the collections of properties,objects,methods..
//here classses are defined by the keyword called class
//Syntax:class Classname
class Car{
    //properties...
    //brand and color:
    //constructor parameters
    constructor(brand,color){
    this.brand=brand;
    this.color=color;
    }
  }
  //Object:object is called as the real time entity
  //these objects are specific to a class
  //Syntax: var objectname=new Class Name();
  //new is a inbuilt keyword which will be used to create objects..
  //that are stored in heap memory 
  
  var c1=new Car("bently","red");//constructor call 
  console.log(c1.color);
  
  //to store the value inside the objects
  //constructors:
  
  //this is a temprorary keyword which is pointing to freshly created objects
  
  //1.create a Class of type Criketer where it should have the following properties
  //a.cricketername,b.cricketer age,c.cricketer salary
  
  class Car{
  constructor(brand,color){
  this.brand=brand;
  this.color=color;
  }
  printcolor(){
  return this.color;
  }
  }
  var c1=new Car("bentley","brown");
  console.log(`the color of my car is ${c1.printcolor()}`);
//   Methods: the functions inside the classes are called as methods
//   Syntax:objectname.methodname();
  class Mul{
  constructor(a,b){
  this.a=a;
  this.b=b;
  }
  mul(){
  return this.a*this.b;
  }
  }
  
  var m1=new Mul(12,14);
  console.log(m1.mul());
  //With parameters
class Car{
    constructor(brand,color){
    this.brand=brand;
    this.color=color;
    }
    printcolor(str){
    return str+this.color;
    }
    }
    var c1=new Car("bentley","brown");
    var res=c1.printcolor("the car that i'm having color is");
    console.log(res);
    // Methods: the functions inside the classes are called as methods
    // Syntax:objectname.methodname();
    
  