# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

The swap function simply exchanges a couple elements, and it's run time is
constant. $\Theta(1)$.  

The partition function has a few assignments and other behaviors that run in
constant time. Additionally it runs through the elements of subarrays of size
n, doing some constant amount of time of work per element. $\Theta(n)$  

Then, like with typical quicksort where a poor pivot is constantly selected,
such as a pivot that results in two subarrays, 1 with 0 elements, and the
other with n-1 elements, the main quicksort function will product a time
complexity of $\Theta(n^2)$.  

Multiplying those out produces a final worst case scenario time complexity of
$\Theta(n^3)$.  

## Resources

I used the section "PSEUDOCODE:..." to help me get started on making a iterative
quick sort from the following site:
https://www.geeksforgeeks.org/c-program-for-iterative-quick-sort/  

I also read through the following page for a more step by step refresher on how
recursive quick sort works in general:
https://www.geeksforgeeks.org/quick-sort-algorithm/  

## Plagiarism Notice

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

//Updating for lint.
