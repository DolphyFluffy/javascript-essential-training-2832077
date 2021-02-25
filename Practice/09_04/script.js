/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

let gridCells = document.querySelectorAll(".cell");

const randColor = () => {
    let hexColor = Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };

gridCells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        cell.style.outline = "2px solid" + `#${randColor()}`;
    });

    cell.addEventListener("mouseleave", () => {
        cell.style.outline = "";
    });
    cell.addEventListener("click", () => {
        if (cell.style.backgroundColor) {
            cell.style.backgroundColor = "";
        } else {
            cell.style.backgroundColor = `#${randColor()}`;
        }
    });
});

const body = document.body;
body.addEventListener("keydown", (event) => {
  // event.code holds the current key pressed:
  console.log(event.code);

  // Test for KeyD (the "d" key)
  if (event.code === "KeyD") {
    body.style.backgroundColor === ""
      ? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
      : (body.style.backgroundColor = "");
  }
});
