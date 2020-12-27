
# Python program for implementation of Insertion Sort

# Function to do insertion sort
def insertionSort(array):
    # keep initial array
    arr = array

    # Traverse through 1 to len(arr)
    for i in range(1, len(arr)):

        key = arr[i]

        # Move elements of arr[0..i-1], that are greater than key,
        # to one position ahead of their current position
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

    return arr


# Example
arr = [12, 11, 2, 13, 5, 6]
print("Original array is:")
print(arr)
print("Sorted array is:")
print(insertionSort(arr))
