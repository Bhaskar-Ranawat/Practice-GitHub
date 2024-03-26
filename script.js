const screen = document.getElementsByClassName("screen")[0];

const buttons = document.getElementsByTagName("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    const buttonText = e.target.innerText;

    if (buttonText === "C") {
      styles();
      screen.value = "";
    } else if (buttonText === "=") {
      try {
        screen.value = eval(screen.value);
      } catch (error) {
        screen.style.color = "red";
        screen.style.backgroundColor = "yellow";
        screen.value = "Invalid operation!";
      }
    } else if (buttonText === "X") {
      screen.value += "*";
    } else if (buttonText === 'DEL'){
        styles();
        screen.value = screen.value.substring(0,screen.value.length-1);
    }else {
      screen.value += buttonText;
    }
  });
}

function styles() {
  screen.style.backgroundColor = "white";
  screen.style.color = "black";
}
