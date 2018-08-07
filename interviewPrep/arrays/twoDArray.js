function hourglassSum(arr) {
    let row = arr[0];
    let sumArr = [];
    for(let i = 0; i < row.length - 2; i++) {
        for(let j = 0; j < row.length - 2; j++) {
            let sum = 0;
            if(arr[i][j + 2] !== undefined && arr[i + 2][j] !== undefined) {
                sum += arr[i][j];
                sum += arr[i][j + 1];
                sum += arr[i][j + 2];
                sum += arr[i + 1][j + 1];
                sum += arr[i + 2][j];
                sum += arr[i + 2][j + 1];
                sum += arr[i + 2][j + 2];
            }
            sumArr.push(sum);
        }
    }
    let highestSum = sumArr[0];
    for(let k = 0; k < sumArr.length; k++) {
        if(sumArr[k] > highestSum) {
            highestSum = sumArr[k];
        }
    }
    return highestSum;
}

const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
];
console.log(hourglassSum(arr));
