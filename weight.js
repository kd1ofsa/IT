function convert() {
    var inputValue = parseFloat(document.getElementById("input").value);
    var fromUnit = document.getElementById("from").value;
    var toUnit = document.getElementById("to").value;
    var result = 0;
  
    // Conversion logic
    if (fromUnit === "cm" && toUnit === "inch") {
      result = inputValue / 2.54;
    } else if (fromUnit === "inch" && toUnit === "cm") {
      result = inputValue * 2.54;
    } else if (fromUnit === "m" && toUnit === "ft") {
      result = inputValue * 3.281;
    } else if (fromUnit === "ft" && toUnit === "m") {
      result = inputValue / 3.281;
    }
    // Add more conversion cases for other units
  
    document.getElementById("result").innerHTML = result.toFixed(2);
  }
  
  // Example usage
  convert();