function getStringLengths(arr) {
    return arr.map(str => str.length);
  }
  

  
  function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
  }
  
  function topStudents(students) {
    return students
      .filter(student => student.score > 75)
      .map(student => student.name);
  }
  
  function squareNumbers(numbers) {
    return numbers.map(num => num * num);
  }

  function getUppercaseStrings(arr) {
    return arr
      .filter(item => typeof item === 'string')
      .map(str => str.toUpperCase());
  }
  
  