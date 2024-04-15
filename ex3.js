function findAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) { // Sửa điều kiện vòng lặp
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
  
  let scores = [85, 90, 75, 95, 80];
  let averageScore = findAverage(scores);
  console.log("Average score:", averageScore);
  