/* Deliverable:
1. Change the main heading 'Fruit Shop' to 'Fruit World'
2. Change the font color of 'Fruit World' from black to orange
3. Change background color of div with id = "header" to green color
4. Add a bottom border of orange color to div with id = "header"
5. Change the font color of 'Fruits In Basket' from black to green
6. Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"
*/
// const head = document.getElementById("main-heading");
// head.textContent = "Fruit World";
// head.style.color = "orange";

// const headDiv = document.getElementById("header");
// headDiv.style.backgroundColor = "green";
// headDiv.style.borderBottom = "solid 5px orange";

// const h2head = document.getElementById("basket-heading");
// h2head.style.color = "green";

// const thanks = document.getElementById("thanks");
// thanks.textContent = "Please visit us again";

/*-------------------------------------------------------------------------------------------------------------------*/
/*
1. Make the 3rd element in the list have yellow background color.
2. Make all the elements in the list have bold font.*/

// const list = document.getElementsByClassName("fruit");
// list[2].style.backgroundColor = "yellow";

// Array.from(list).forEach((el) => {
//   el.style.fontWeight = "bold";
// });

/*-------------------------------------------------------------------------------------------------------------------*/

/* 
1. Change the color of 5th "li" tag (one with "Mango" written inside it) to blue.
2. Make all the "li" tags italic.
*/

// const list = document.getElementsByTagName("li");
// list[4].style.color = "blue";

// Array.from(list).forEach((el) => {
//   el.style.fontStyle = "italic";
// });

/*-------------------------------------------------------------------------------------------------------------------*/

/*
Deliverable:
1. Implement the code as shown in the video.
2. Use id as query to select the basket heading and set its color to
brown.
3. Change the background color of even fruit items to red and
change their text color to white.
*/

// document.querySelector("#basket-heading").style.color = "brown";

// const list = Array.from(document.querySelectorAll(".fruit"));
// for (let i = 0; i < list.length; i++) {
//   if (!(i % 2 === 0)) {
//     list[i].style.backgroundColor = "brown";
//     list[i].style.color = "white";
//   }
// }

/*-------------------------------------------------------------------------------------------------------------------*/

/*
Deliverables:
1. Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".
2. Make the sub-heading text italic.
2. Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".
3. On this paragraph tag set an id of "fruits-total"
*/

// // 1.
// const subHeading = document.createElement("h3");
// const subText = document.createTextNode(
//   "Buy high quality organic fruits online"
// );
// subHeading.appendChild(subText);
// document.querySelector("#header").appendChild(subHeading);

// // 2.
// subHeading.style.fontStyle = "italic";

// // 3.
// const para = document.createElement("p");
// const paraText = document.createTextNode("Total fruits : 4");
// para.appendChild(paraText);
// const secondDiv = document.getElementsByTagName("div")[1];
// const fruits = document.getElementsByClassName("fruits")[0];
// secondDiv.insertBefore(para, fruits);

// //4.
// para.setAttribute("id", "fruits-total");
// console.log(para);

/*-------------------------------------------------------------------------------------------------------------------*/

/*
1. In each "li" after the delete button add an edit button with class 'edit-btn'.
2. Now, implement the add and delete functionality
*/

//added Edit Button
const edit = document.createElement("button");
edit.textContent = "Edit";
edit.className = "edit-btn";

const fruit = Array.from(document.getElementsByClassName("fruit"));
fruit.forEach((el) => {
  el.appendChild(edit.cloneNode(true));
});

//implemented delete btn functionality
const fruits = document.querySelector(".fruits");
fruits.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});

//implemented add functionality
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fruitToAdd = document.getElementById("fruit-to-add");

  const newLi = document.createElement("li");
  if (fruitToAdd.value.trim() !== "") {
    newLi.innerHTML =
      fruitToAdd.value +
      '<button class="delete-btn">x</button><button class="edit-btn">Edit</button>';
    fruits.appendChild(newLi);
  }
});
