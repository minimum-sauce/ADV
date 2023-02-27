# [2023-02-17]
## Research
Hooks - Good alternative to classes, cleaner code, no need for "this" to bind functions and can be reused

## Important hooks:
* useEffect() - takes in a function and array of values. Used to apply actions outside of React
* useState() - used to initialize state (Ex. const [value, setValue] = useState(0)). Takes in a value and returns function that updates the state of the value.
* useRef() - creates a mutable reference object that retains its value throughout its lifecycle.


# [2023-02-21]
## general
Created initial implementation for incremental sort using hooks and state with react. 

## issues
* had some issues getting the values to update when the got changed
* How to structure the code with the hooks and functions needed became quite a challenge

## fixes
* After implementing the initial draft we disscussed how we could improve upon the design and came up with some good improvements. Such that we can step both forward and backward. right now the prototype is only stepping through 


# [2023-02-22]
## Implemented
* implemented colors for the incremental sort prototype
* started implementing dfs with new structure in mind from earlier discussion.

# issues
* getting the colors to be changed and placed in the right places took some time. They didn't change as expected and so became quite problematic.
* Have been hard finding a good way to visualize the dfs search algorithm since displaying nodes 
 


# [2023-02-24]

## Implemnetations
* With the help of PKD libraries, implemented graphs as well as the Stack type.
* implemented graph_create_grid() function for use in creating randomized mazes
* Implementation of the random maze generator algorithm. Used Wikipedia as a resource for getting the algorithm. The implementation to code I made myself.
  Used the random-dfs algorithm.
## Problems
* lot of problems with displaying the maze after it was made. Started with trying to create divs using for-loops but couldn't get it working.
  After that I tried to implement it using the reactElements but that didn't work out as planed either. I wasn't able to get the display

# [2023-02-26]
* Continued implementing displaying of the random maze algorithm. Started getting it working when trying the approach we earlier used implementing the array, sorting algorithms.
* running through a map of each element and creating a customized div-layout for each element.
* making the css work for displaying the right stuff took some time since I had multiple classes changing some of the same parameters,
  which had to be changed in the right order. I made it work by making everything classes and adding them in the appropreate order using functions.

