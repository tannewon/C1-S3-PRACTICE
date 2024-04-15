let originalArray = [1, 2, 3, 4, 5];

function updateArray(array, index, newValue) {
  // Sao chép mảng gốc để tránh làm thay đổi mảng gốc
  let newArray = [...array];
  // Cập nhật giá trị tại chỉ mục được chỉ định trong mảng sao chép
  newArray[index] = newValue;
  return newArray;
}

let updatedArray = updateArray(originalArray, 2, 10);

console.log("Original array:", originalArray); // Mảng gốc không được sửa đổi
console.log("Updated array:", updatedArray);
