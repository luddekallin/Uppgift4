//deklarera variabler
let input;
let completed = 0;

const addBtn = document.querySelector("#addBtn");
const addToListInput = document.querySelector("#addToListInput");
const info = document.querySelector("#info");
const list = document.querySelector("#ulList");
const amountCompleted = document.querySelector("#amountCompleted");

//trashcan img
const trashcan = new Image(22,22);
trashcan.src = "trashcan.png";



//deklarerar listans array
const listArray = []

//event listener till knapp
addBtn.addEventListener(
    "click",
    addToListFunction
);

//event listener för att kunna använda enterknappen också för att köra funktionen
addBtn.addEventListener(
    "keypress",
    function (e){
        if (e.key === "Enter"){
            addToListFunction(e);
        }
    }
);


//funktion för lägga till input till lista
function addToListFunction(){
    input = addToListInput.value;

    if (input.trim() === ""){
        info.innerHTML= "Write something to add to list"
        return;
    }
    else{
        info.innerHTML="";
        let item = document.createElement("li");
        const itemLabel = document.createElement("span");
        itemLabel.innerText = input;
    
        item.appendChild(itemLabel);
        //item.appendChild(trashcan);
        list.appendChild (item);

        //lägger till objektet i listan i js
        listArray.push({item: itemLabel, completeStatus: false});
        
        //event listener till varje objekt med funktionen att toggle "completed"
        item.addEventListener("click", function (){ 
            if (item.getAttribute("class")=="completedStyle"){
                item.setAttribute("class","");
                completeStatus = false;
                completed--;
            }
            else{
                item.setAttribute("class", "completedStyle");
                completeStatus = true;
                completed++;
            }
            
           amountCompleted.innerHTML = completed + " completed";
        });

       /* trashcan.addEventListener("click", function(){
            trashcan.parentElement.remove()

        });*/

    }


    //clear input
    addToListInput.value = "";
}





