let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons); // Fixed typo 'button' to 'buttons'
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      try {
        string = eval(string); // Safely evaluate the string
      } catch {
        string = "Error"; // Handle any errors in case of invalid input
      }
      input.value = string; // Set the value of the input element
    } else if (e.target.innerHTML === "AC") {
      string = ""; // Clear the input when 'AC' is clicked
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string; // Append the clicked button value to the input
    }
  });
});
