// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined) return [];
    let towelSortMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        if (!(i % 2)) {
            towelSortMatrix.push(...matrix[i]);
        } else {
            towelSortMatrix.push(...matrix[i].reverse());
        }
    }
    return towelSortMatrix;
};
