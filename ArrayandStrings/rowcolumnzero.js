let arr = [[1, 2, 3], [3, 0, 5], [6, 7, 8], [9, 10, 11]];

let arr2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]; // initiate MxN array with 0 


for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
        if (arr2[i][j] == 1)
            continue;

        if (arr[i][j] == 0) {
            // set all row to 0
            for (let r = 0; r < arr.length; r++) {
                arr[r][j] = 0;
                arr2[r][j] = 1;
            }// set all col to 0
            for (let c = 0; c < arr[0].length; c++) {
                arr[i][c] = 0;
                arr2[i][c] = 1;
            }
        }

    }
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}