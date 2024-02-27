/* Deliverable:
1. Change the main heading 'Fruit Shop' to 'Fruit World'
2. Change the font color of 'Fruit World' from black to orange
3. Change background color of div with id = "header" to green color
4. Add a bottom border of orange color to div with id = "header"
5. Change the font color of 'Fruits In Basket' from black to green
6. Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"
*/
const head = document.getElementById("main-heading");
head.textContent = "Fruit World";
head.style.color = "orange";

const headDiv = document.getElementById("header");
headDiv.style.backgroundColor = "green";
headDiv.style.borderBottom = "solid 5px orange";

const h2head = document.getElementById("basket-heading");
h2head.style.color = "green";

const thanks = document.getElementById("thanks");
thanks.textContent = "Please visit us again";
