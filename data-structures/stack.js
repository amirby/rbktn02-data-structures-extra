/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7) 
=> 4
What's the time complexity?



 */

function Stack(capacity) {
  // implement me...
  this.top = 0;
  this.max = capacity;
  this.minimum = 0;
}

Stack.prototype.push = function(value) {
  // implement me...
  if(this.top === this.max){
    return "Max capacity already reached. Remove element before adding a new one."
  }else{
    if (this.top === 0){
      this.minimum = value;
    }
    else if (this.minimum > value){
      this.minimum = value;
    }
    this[this.top] = value;
    this.top++ ;
  }
  
};
// Time complexity: O(1)

Stack.prototype.pop = function() {
  // implement me...
  var deleted = this[this.top-1];
  delete this[this.top-1];
  this.top-- ;
  return deleted;

};
// Time complexity:O(1)

Stack.prototype.peek = function() {
  // implement me...
  return this[this.top - 1];

};
// Time complexity:O(1)

Stack.prototype.count = function() {
  // implement me...
  return this.top ;
};
// Time complexity:O(1)

Stack.prototype.contain= function (target)  {
  var result = false;
  for(var key in this){
    if(this[key] === target){
      result = true;
    }
  }
  return result;
}
// Time complexity:O(n)

Stack.prototype.until =  function(target){
  var temp = this
  var count = 1;
  while ( temp.pop() !== target){
    count ++
  }
  return count; 
}
// Time complexity:O(n)

Stack.prototype.min = function(){
  return this.minimum;
}
// Time complexity:O(1)

Stack.prototype.sort = function(){
  var array = [];
  for (var i = 0; i < this.top; i++){
    array.push(this[i]);
  }
  array = array.sort();
  // console.log(array)
  this.top = 0
  for(var i = 0; i < array.length; i++){
    this.push(array[i])
  }  
  return this ;
}


/*
*** Exercises:


1. Implement a stack with a minimum method which returns the minimumimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

2. Sort a stack so that its elements are in ascending order.

3. Given a string, determinimume if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.minimum(5,(6-3))(' ) => false
Ex: balancedParens( 'Math.minimum(5,(6-3)))(' ) => false*/
function balancedParens(string){
  var balanced = new Stack(string.length);
  for(var i = 0; i < string.length; i++){
    if((string[i] === "(") || (string[i] === ")") ){
      balanced.push(string[i]);
    }
  }
  delete balanced.minimum;
   var open =0,closed = 0 ;
  for(var key in balanced){
    if(balanced[key] === "("){
      open++
    }else if(balanced[key] === ")"){
      closed++
    }
  }
  console.log (open, closed)
  if(open === closed){
    return true
  }else{
    return false
  }
}

/*4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */
function Hanoi (n){
  var tower1 = new Stack(n)
  var tower2 = new Stack(n)
  var tower3 = new Stack(n)
  var i = n
  while(i--){
    tower1.push(i);
  }
  console.log(tower1)
  while(tower1.top >= 0){
    if ((tower1.top % 2) !== 0){
      tower2.push(tower1.pop())
      if (tower3[0]){
        while (tower3[0])
        tower2.push(tower3.pop())
      }
    }
    if ((tower1.top % 2) === 0){
      tower3.push(tower1.pop())
      if (tower2[0]){
        while (tower2[0])
        tower3.push(tower2.pop())
      }
    }
  }
  if (tower2[0]){
    return tower2
  }
  else if (tower3[0]){
    return tower3
  }
  
}