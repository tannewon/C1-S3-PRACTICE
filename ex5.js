function updateStudentGrade(studentsArray, idToUpdate, newGrade) {
    // Bước 1: Sử dụng phương thức findIndex để tìm chỉ số của học sinh có ID cung cấp trong mảng studentsArray.
    const indexToUpdate = studentsArray.findIndex(student => student.id === idToUpdate);
  
    if (indexToUpdate !== -1) {
      // Bước 2: Nếu tìm thấy học sinh có ID cung cấp, tạo một bản sao của mảng ban đầu bằng toán tử spread.
      const updatedStudentsArray = [...studentsArray];
      // Bước 3: Cập nhật điểm của học sinh tại chỉ số tìm được trong mảng đã sao chép.
      updatedStudentsArray[indexToUpdate] = {...updatedStudentsArray[indexToUpdate], grade: newGrade};
      return updatedStudentsArray;
    } else {
      // Bước 4: Nếu không tìm thấy học sinh có ID cung cấp, hiển thị một thông báo và trả về mảng ban đầu không thay đổi.
      console.log("Student with ID", idToUpdate, "was not found.");
      return studentsArray;
    }
  }
  
  // Mảng ban đầu của sinh viên
  console.log("Original students array:");
  console.log(students);
  
  // Cập nhật điểm của học sinh có ID là 2 thành "A"
  let updatedStudents = updateStudentGrade(students, 2, "A");
  
  // Mảng sinh viên đã cập nhật
  console.log("\nUpdated students array:");
  console.log(updatedStudents);
  