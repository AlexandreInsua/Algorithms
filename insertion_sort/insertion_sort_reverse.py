
# Python program for implementation of Insertion Sort Reverse

def insertionSortReverse(array):
    arr = array

    for i in range(1, len(arr)):

        key = arr[i]

        j = i - 1
        while j >= 0 and key > arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

    return arr


# Example
arr = [12, 11, 2, 13, 5, 6]
print("Original array is:")
print(arr)
print("Sorted array decreasing is:")
print(insertionSortReverse(arr))
