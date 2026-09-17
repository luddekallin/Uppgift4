//deklarera variabler
let input;
let completed = 0;

const addBtn = document.querySelector("#addBtn");
const addToListInput = document.querySelector("#addToListInput");
const info = document.querySelector("#info");

//event listener till knapp
addBtn.addEventListener(
    "click",
    addToListFunction
);

//funktion för lägga till input till lista
function addToListFunction(){
    input = addToListInput.value;
    const node = document.createElement("li");
    const textnode = document.createTextNode(input);
    node.appendChild(textnode)

    document.querySelector("#ulList").appendChild(node);

    if (input == ""){
        info.innerHTML= "Write something to add to list"
    }

}

//funktion för göra ett element i listan "complete"