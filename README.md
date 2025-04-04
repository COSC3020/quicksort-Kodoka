# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Like standard quick sort, in a worst case scenario, such as consistently choosing
the last element of the array, which is exactly what my code does, my code ends up
performing $n+(n-1)+(n-2)+...+1 = \frac{n(n+1)}{2}$ work, where n is the size
of the initial array to be sorted, as each sequential call work on a a portion of
the array 1 element smaller than the previous call, 'til we've worked our way down
to a single element. As we don't account for constants or lower order terms
$\frac{n(n+1)}{2}$ gives my code a final worst case scenario run time of $\Theta(n^2)$.

## Resources

I used the section "PSEUDOCODE:..." to help me get started on making a iterative
quick sort from the following site:
https://www.geeksforgeeks.org/c-program-for-iterative-quick-sort/  

I also read through the following page for a more step by step refresher on how
recursive quick sort works in general:
https://www.geeksforgeeks.org/quick-sort-algorithm/  

I compared my iterative quick sort to standard quick sort, after you suggested
doing so for analyzing merge sort's time complexity using the following source:
https://builtin.com/articles/quicksort#:~:text=Quicksort%20Worst%2DCase%20Time%20Complexity,Quicksort%20is%20O%20(n2)%20.  

Sum of $n+(n-1)+(n-2)+...+1$:
https://en.wikipedia.org/wiki/Triangular_number  

## Plagiarism Notice

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

//Updating for lint.
