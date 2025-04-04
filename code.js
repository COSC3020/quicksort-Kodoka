function quicksort(array)
{
    // Initial indices, low/high, are the start and end of the array.
    var low = 0;
    var high = array.length - 1;

    // Holds indices to be sorted itteratively.
    var indices = [];

    indices.push(low);
    indices.push(high);

    // Sort 'til indices in empty, at which point the array should be sorted.
    while(indices.length > 0)
    {
        // Start partitioning/sorting from whole array.
        high = indices.pop();
        low = indices.pop();

        // If low == high, array has only one element, is trivially sorted, and
        // we're done with it.
        if(low < high)
        {
            // Partition array, get pivot.
            pivotIndex = partition(array, low, high);

            // If elements exist to left of pivot, push the boundaries of that
            // subarray on to stack.
            if(pivotIndex - 1 > low)
            {
                indices.push(low);
                indices.push(pivotIndex - 1);
            }

            // If elements exist to right of pivot, push the boundaries of that
            // subarray on to stack.
            if(pivotIndex + 1 < high)
            {
                indices.push(pivotIndex + 1);
                indices.push(high);
            }
        }
    }
    return array;
}

function partition(array, low, high)
{  
    // Choose last element of array as pivot.
    var pivot = array[high];
    smallIndex = low - 1;
    // Compare elements of array.
    for(var largeIndex = low; largeIndex < high; largeIndex++)
    {
        // Swap elements if necessary.
        if(array[largeIndex] < pivot)
        {
            smallIndex++;
            swap(array, smallIndex, largeIndex)
        }
    }
    // Perform final swap to put pivot in correct position.
    swap(array, smallIndex + 1, largeIndex);
    return smallIndex + 1;
}

// Swaps two elements of an array.
function swap(array, low, high)
{
    var temp = array[low];
    array[low] = array[high];
    array[high] = temp;
}
