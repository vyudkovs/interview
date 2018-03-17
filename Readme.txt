Please read these instructions first:

1.  download all code and data files.
2.  open program.js and complete parseTree function
3.  run the program to see how you've done
4.  make sure to add all your own test cases as needed.

The goal:

your robot is harvesting fruits from a tree.  trunk and branches are denoted by 0.  fruits are denoted by value > 0.  You job is to create a robot crawler that will start from the root of the three, climb up every branch, and weigh every fruit. 
your robot cannot jump, fly or drop.  it can only move aloneside the tree up and down the branches.
your job is to keep track of how much the fruits weigh.

Sample input: 

0, -1, 0, 0, 0
1, 0, 2
2, 0, 0, 1
3, 0
4, 2, 1


line 1: this is your trunk.  first number is the name of a branch.  you start from 0 and add 1 to next one.  second number is a parent of the branch.  all following numbers are the children of the branch which can be 0 for another branch or a fruit represented by it's weight.
line 2: this is the first child of the previous branch.  it's name is 1, it's parent is 0.  it has one fruit on it that weighs 2.

output: your output should be a sum of all fruits.