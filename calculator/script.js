let display = document.getElementById("display");
let historyList = document.getElementById("history-list");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    const input = display.value;
    const result = math.evaluate(input);
    display.value = result;

    // Add to history
    const li = document.createElement("li");
    li.textContent = `${input} = ${result}`;
    historyList.prepend(li); // add to top
  } catch (error) {
    alert("Invalid expression");
  }
}

// Keyboard input support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (/\d|\+|\-|\*|\/|\(|\)|\./.test(key)) {
    append(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
});
