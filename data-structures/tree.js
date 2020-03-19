/*
TREES

Abstract data type

General Tree:
A tree has a root node.
The root node has 0 or more children.
Each child node has 0 or more children.
(each node in the tree can be seen as a subtree)

Constraints:
A child has only one parent and the root node has no parent.
Note: A tree is a special type of graph. A tree is a graph without cycles.

*** Operations:

tree.addChild(value)
=> child node (new tree)
add child to tree/subtree and return child node (which should be a tree instance)

tree.contains(value)
=> true/false
Return true if value is in tree, false if not

tree.traverseDepthFirst(callback)
=> undefined
Invoke the callback for every node in a depth-first order

tree.traverseBreadthFirst(callback)
=> undefined
Invoke the callback for every node in a breadth-first order

*** Additional Exercises:
Given treeA and treeB, check if treeB is a subtree of treeA (meaning that there exists a node n in treeA such that the subtree of n is identical to treeB).

Given a dictionary, create a prefix tree (commonly known as a trie)
https://en.wikipedia.org/wiki/Trie

*/

function Tree (value) {
  // implement me...
  this.value = value;
  this.children = []
}

Tree.prototype.addChild = function(value) {
  // implement me...
  var newNode = new Tree(value)
  this.children.push(newNode)
};
// Time complexity:


Tree.prototype.contains = function(value) {
  if(this.value === value){
    return true
  }
  for( var i = 0; i < this.children.length; i++){
    if(this.children[i].contains(value)){
      return true
    }
    
  }
  return false;
  // implement me...
  // var result = false;
  // if(this.value === value){
  //   return true;
  // }
  // else{
  //   for( var i = 0; i < this.children.length; i++){
  //     if (this.children[i].value === value){
  //       result = true;
  //     }
  //     result = result || this.children[i].contains(value)
  //   }
  // }
  // return result;
};
// Time complexity:


Tree.prototype.traverseDepthFirst = function(fn) {
  // implement me... What's the problem here?
                    
    this.value = fn(this.value);


    if (this.children.length === 0) {
      return;
    }      
    else {
      for(var i = 0; i < this.children.length; i++){
        this.children[i].traverseDepthFirst(fn)
      }
    }
};
// Time complexity:


Tree.prototype.traverseBreadthFirst = function(fn) { 
  // implement me...
};
// Time complexity:
