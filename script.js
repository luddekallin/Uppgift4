let input;

const addBtn = document.querySelector("#addBtn");
const addToListInput = document.querySelector("#addToListInput");

addBtn.addEventListener(
    "click",
    addToListFunction
);

function addToListFunction(){
    input = addToListInput.value;
    const node = document.createElement("li");
    const textnode = document.createTextNode(input);
    node.appendChild(textnode)

    document.querySelector("#ulList").appendChild(node);

}