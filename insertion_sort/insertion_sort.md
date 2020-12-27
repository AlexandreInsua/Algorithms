# Insertion sort

This algorithm solves de sorting problem and is an efficient algorithm for sorting a small number of elements. It receives as parameter a sequence of n numbers putted into an array or similar data structure.  It returns the sequence ordered. This algorithm sorts the input numbers in place: it rearranges the numbers within the array. 

<pre>
for i = 2 to A.length
	key = A<sub>i</sub>
	// insert A<sub>i</sub> into the sorten sequence
	j = i - 1
	while j > 0 and key < A<sub>j</sub> 
		A<sub>i</sub> + 1 = A<sub>j</sub>
		j = j - 1
	A<sub>j</sub> + 1 = key
</pre>