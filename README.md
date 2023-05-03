# HACKER RANK CHALLENGES
|CHALLENGE|SOLUTION-JS|
|---|---|---|
|[Lisa's WorkBook](https://www.hackerrank.com/challenges/lisa-workbook/problem)|[Lisa_solution](https://github.com/andywarui/hackerrank/blob/main/lisa_workbook.js)|[The code provided is missing the implementation of the workbook function. The workbook function is expected to take in three parameters: n, k, and arr, and return an integer. The n parameter is the number of chapters in the book, k is the maximum number of problems that can be in each page, and arr is an array of integers where arr[i] represents the number of problems in the i-th chapter.

The workbook function should calculate and return the number of special problems in the book. A problem is considered special if the page number it appears on is the same as the problem number. For example, if a problem appears on page p and its problem number is x, then the problem is considered special if x is equal to p.

To solve this problem, we need to iterate over the chapters in the book, and for each chapter, we need to calculate how many pages are needed to solve all the problems. We can then iterate over the pages in the chapter and count how many special problems there are. Finally, we can return the total count of special problems in the book.]
