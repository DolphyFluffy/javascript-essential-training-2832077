/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import backpackObjectArray from "./components/data.js";


const main = document.querySelector(".maincontent");


//for loop to go trhu

function articleMaker(backpackObjectArray) {
  for (const bag of backpackObjectArray) {
    let content = `
        <figure class="backpack__image">
          <img src=${bag.image} alt="" />
        </figure>
        <h1 class="backpack__name">${bag.name}</h1>
        <ul class="backpack__features">
          <li class="packprop backpack__volume">Volume:<span> ${
            bag.volume
          }l</span></li>
          <li class="packprop backpack__color">Color:<span> ${
            bag.color
          }</span></li>
          <li class="backpack__age">Age:<span> ${bag.backpackAge()} days old</span></li>
          <li class="packprop backpack__pockets">Number of pockets:<span> ${
            bag.pocketNum
          }</span></li>
          <li class="packprop backpack__strap">Left strap length:<span> ${
            bag.strapLength.left
          } inches</span></li>
          <li class="packprop backpack__strap">Right strap length:<span> ${
            bag.strapLength.right
          } inches</span></li>
          <li class="feature backpack__lid">Lid status:<span> ${
            bag.lidOpen ? "open" : "closed"
          }</span></li>
        </ul>
    `;

    let newArticle = document.createElement("article");
    newArticle.classList.add("backpack");
    newArticle.setAttribute("id", bag.id);
    newArticle.innerHTML = content;
    main.append(newArticle);
  }
}

articleMaker(backpackObjectArray);
