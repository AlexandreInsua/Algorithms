# Insertion sort

This algorithm solves de sorting problem and is an efficient algorithm for sorting a small number of elements. It receives as parameter a sequence of n numbers putted into an array or similar data structure.  It returns the sequence ordered. This algorithm sorts the input numbers in place: it rearranges the numbers within the array. 

This algorithm consists of two loops. The first traverses the array _A_ from the second position to the last one.
At this point the value of the current position _i_ is stored in the _key_ variable and also is saved the previous position in another one called _j_.

The second loop is nested inside the first and checks for two conditions: the previous position must not be zero and the _key_ must be  less than the position value _j_.

In the event that these conditions were true, the exchange of values ​​takes place. This causes, on the one hand, that the examined value is ordered in the array and on the other hand the subarray of larger values ​​moves to the right.

## Pseucode

<pre>
for i = 2 to A.length
	key = A<sub>i</sub>
	j = i - 1
	while j > 0 and key < A<sub>j</sub> 
		A<sub>j + 1</sub> = A<sub>j</sub>
		j = j - 1
	A<sub>j + 1</sub> = key
</pre>