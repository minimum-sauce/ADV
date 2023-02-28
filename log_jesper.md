# [2023-02-16]
## Research[6h]
* After deciding to use react to build our interface for our project I had to start with some reasearch about the basics of the library
* Completed a code along tutorial making a tic-tac-toe

## Topics of interest
* React components for rendering a visual representation of an array
* Understanding the types of React
* Implementing state in React components
* Runnig React with typescript
* Component properties and passing them as arguments
* Nesting Components

## Problems 
* In the older React code base the type used for components were primarily Class components. Thus a lot of the research material is written for that application
and not really in line with what we've used in this course. 

## Fixes
* More research

# [2023-02-17]
## Research [2h]
*   Further research on react finding out about functional components and react Hooks that could be used instead of Class components. 
    This seems as a much better use for our case.
*   Watched tutorials on how to get started with react, and some basic css for styling.

## Problems
*   Everything about React is a bit confusing. Had some issues implementing Functional components instead of Class components.
*   Also it has been quite challenging to sort out what we need for this project and if React even can deliver that

## Fixes
*   More research
*   After some more resarch and some playing arond with Fuctional components it got a bit less confusing


# [2023-02-21]
## Sandbox[6h]
*   We met up at school to share our findings of our own research. Also we set up some guidelines for how we want to visualize our sorting algorithms
*   Played around trying to implement insertion sort 

## Implemented
*   Got the idea to "record" every step of the selected sorting algorithm so that we can step through and see every step
*   Coded a functional stepper prototype using the recorded steps

## Problems
*   Getting the displayed components to change values when stepping throught the algorithm(this was before recording the steps).

## Solution 
*   Turns out React doesn't rerender an array if you sort in place due to the id of the array still being the same. 
    Luckely enough the implementation of recording the steps copies the array in it's current state thus refering to a new array solving that issue.


# [2023-02-22]
## Sandbox & Project planning[4h]
*   We met up sharing experiences and set some milestones for the project we wanted to achieve. 


## Implementation
*   Further work on the stepping function. Working on the interface to apply a color to the element we are comparing and another color for the reference
    to make it easier to follow and understad how the algorithm is working.
*   Finished a working prototype for the insertion sort with a visual representation of every step

# [2023-02-27]
## Code structuring[h]
*   Been working on abstracting and structuring our code. 
    Separating diffrent functional components and documenting them to be able to reuse them throughout the code for an easier application, and not having to rewrite the same code. Also separating Functional components(showing something visual) from functions that don't need any visual representation


## Problems
*   It has been a bit challanging knowing what information has to be passed to the next abstraction layer and not. Especially since we've all
    been working on separate protoypes for different sorting algorithms. 
*   I think time and more structure will make it clearer as we try to merge our work.
