
  
    function getStringLengths(strings) {
    return strings.map(string => string.length);
    }
    console.log(getStringLengths(["hewan", "loves", "photography"])); 
    
    function filterEvenNumbers(numbers) {
        return numbers.filter(number => number % 2 === 0);
    }

    console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
    
    function getTopStudents(students) {
        return students
            .filter(student => student.score > 75)
            .map(student => student.name);
    }
    const students = [
        { name: "Melat", score: 80 },
        { name: "Bethel", score: 70 },
        { name: "Nebyat", score: 90 }
    ];
        console.log(getTopStudents(students)); 

    

    function squareNumbers(numbers) {
        return numbers.map(number => number * number);
    }

    console.log(squareNumbers([3, 5, 9, 7])); 

    function getUppercaseStrings(elements) {
        return elements
            .filter(element => typeof element === "string")
            .map(string => string.toUpperCase());
    }
    console.log(getUppercaseStrings(["people", 143, "help", true, "world"]));     
 


