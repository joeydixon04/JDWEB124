// joey dixon - 10/27/25


document.addEventListener("DOMContentLoaded", () => {
  const numInput = document.getElementById("num");
  const addPara = document.getElementById("addition");
  const subPara = document.getElementById("subtraction");
  const mulPara = document.getElementById("multiplication");
  const divPara = document.getElementById("division");
  const calcButton = document.getElementById("calculate");

  function doAddition(num) {
    let result = "Addition: ";
    for (let i = 1; i <= 10; i++) {
      result += `${num} + ${i} = ${num + i}  |  `;
    }
    addPara.textContent = result;
  }
  function doSubtraction(num) {
    let i = 1;
    let result = "Subtraction: ";
    while (i <= 10) {
      result += `${num} - ${i} = ${num - i}  |  `;
      i++;
    }
    subPara.textContent = result;
  }

  function doMultiplication(num) {
    let i = 1;
    let result = "Multiplication: ";
    do {
      result += `${num} × ${i} = ${num * i}  |  `;
      i++;
    } while (i <= 10);
    mulPara.textContent = result;
  }

  function doDivision(num) {
    let result = "Division: ";
    for (let i = 1; i <= 10; i++) {
      result += `${num} ÷ ${i} = ${(num / i).toFixed(2)}  |  `;
    }
    divPara.textContent = result;
  }

  function calculateAll() {
    const num = parseFloat(numInput.value);
    if (isNaN(num)) {
      alert("Please enter a valid number.");
      return;
    }

    doAddition(num);
    doSubtraction(num);
    doMultiplication(num);
    doDivision(num);
  }

  calcButton.addEventListener("click", calculateAll);
});
