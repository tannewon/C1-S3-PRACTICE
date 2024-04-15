let numbers = [1, 2, 3, 4, 5];

// Hàm lọc ra các số chẵn từ một mảng
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Hàm ánh xạ các phần tử của mảng thành giá trị bình phương của chúng
function squareNumbers(arr) {
  return arr.map(num => num * num);
}

// Hàm tính tổng các phần tử của mảng
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log("Even numbers:", filterEvenNumbers(numbers)); // [2, 4]
console.log("Squared numbers:", squareNumbers(numbers)); // [1, 4, 9, 16, 25]
console.log("Sum of numbers:", sumArray(numbers)); // 15
