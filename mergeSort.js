// Merges two subarrays of array[].
// First subarray is array[l..mid]
// Second subarray is array[mid+1..r]
function merge(array, left, mid, right)
{
    var leftArrayLength = mid - left + 1;
    var rightArrayLength = right - mid;
 
    // Create temp arrays
    let leftArray = new Array(leftArrayLength);
    let rightArray = new Array(rightArrayLength);
 
    // Copy data to temp arrays leftArray[] and rightArray[]
    for (let i = 0; i < leftArrayLength; i++)
        leftArray[i] = array[left + i];
    for (let j = 0; j < rightArrayLength; j++)
        rightArray[j] = array[mid + 1 + j];
 
    // Merge the temp arrays back into array[l..right]
 
    // Initial index of first subarray
    let i = 0;
 
    // Initial index of second subarray
    let j = 0;
 
    // Initial index of merged subarray
    let k = l;
 
    while (i < leftArrayLength && j < rightArrayLength) {
        if (leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        }
        else {
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // leftArray[], if there are any
    while (i < leftArrayLength) {
        array[k] = leftArray[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // rightArray[], if there are any
    while (j < rightArrayLength) {
        array[k] = rightArray[j];
        j++;
        k++;
    }
}

// left is for left index and right is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(array, left, right) {
    // base condition
    if(left >= right){
        return; 
    }
  
    let mid = left + parseInt((right-left)/2);
    mergeSort(array, left, mid);
    mergeSort(array, mid+1, right);
    merge(array, left, mid, right);
}
