const addToListInput = document.querySelector("#addToList");
const addToListBtn = document.querySelector("#addBtn");
const listContent = [""];

addToListBtn.addEventListener(
    "click",
    addToListFunction
)

function addToListFunction(){
        let ul = document.querySelector("#ulList")
        let li = document.createElement("li");
        li.appendChild(document.createTextNode("test"));
        ul.appendChild(li);

    }