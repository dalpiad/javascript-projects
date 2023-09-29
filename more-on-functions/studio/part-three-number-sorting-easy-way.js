//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];


function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }

//Sort each array in ascending order.
function sortArrayUp(arrayOfNums) {
    let sortedArray = [];
    for (let i = 0; i < arrayOfNums.length; i++) {
      sortedArray.push(findMinValue(arrayOfNums));
      arrayOfNums.splice(arrayOfNums.indexOf(findMinValue(arrayOfNums)), 1);
    }
    return sortedArray;
  }

console.log(sortArrayUp(nums3));

//Sort each array in decending order.
function sortArrayDown(arrayOfNums) {
    let sortedArray = [];
    for (let i = 0; i < arrayOfNums.length; i++) {
      sortedArray.unshift(findMinValue(arrayOfNums));
      arrayOfNums.splice(arrayOfNums.indexOf(findMinValue(arrayOfNums)), 1);
    }
    return sortedArray;
  }
  console.log(sortArrayDown(nums2));