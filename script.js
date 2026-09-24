//deklarera variabler
let input;
let completed = 0;

const addBtn = document.querySelector("#addBtn");
const addToListInput = document.querySelector("#addToListInput");
const info = document.querySelector("#info");
const list = document.querySelector("#ulList");
const amountCompleted = document.querySelector("#amountCompleted");



//deklarerar listans array
const listArray = []

//event listener till knapp
addBtn.addEventListener(
    "click",
    addToListFunction
);

//event listener för att kunna använda enterknappen också för att köra funktionen
addToListInput.addEventListener(
    "keydown",
    function (event){
        if (event.code === "Enter"){
            addToListFunction();
        }
    }
);


//funktion för lägga till input till lista
function addToListFunction(){
    input = addToListInput.value;
    let completeStatus = false;

    //skriver ut ett meddelande om input är tom
    if (input.trim() === ""){
        info.innerHTML= "Write something to add to list"
        return;
    }
    else{
        //tar bort meddelandet om man skrivit något i input
        info.innerHTML="";
        let item = document.createElement("li");
        const itemLabel = document.createElement("span");
        itemLabel.innerText = input;
        //trashcan img
        const trashcan = new Image(22,22);
        trashcan.src = "trashcan.png";
    
        item.appendChild(itemLabel);
        item.appendChild(trashcan);
        list.appendChild (item);

        //lägger till objektet i listan i js
            const object = {};
            object.name = input;
            object.completeStatus;
            listArray.push({input, completeStatus});

        //Event listener för att ta bort objektet från listan och array genom att trycka på soptunnan
            trashcan.addEventListener("click", function(){
                trashcan.parentElement.remove()

                //räkna om "completed"
                let completedStyle = document.querySelectorAll(".completedStyle");
                completed = completedStyle.length
                amountCompleted.innerHTML = completed + " completed";

                

                // Remove from array
                let index = listArray.map(t => t.input).indexOf(trashcan.parentElement);
        
                listArray.splice(index, 1);
                console.log(index);

                console.log(listArray);
            });
        
        
        


        //event listener till varje objekt med funktionen att toggle "completed"
        itemLabel.addEventListener("click", function (){ 
            if (item.getAttribute("class")=="completedStyle"){
                item.setAttribute("class","");
                completed--;
                
                changeStatus(item, false);

                console.log(listArray);
            }
            else{
                item.setAttribute("class", "completedStyle");
                completed++;
                
                changeStatus(item, true);

                console.log(listArray);
                
            }


            //uppdaterar hur många som är "completed" 
            amountCompleted.innerHTML = completed + " completed";
            
        });

        console.log(listArray); //skriver ut array i konsolen för kontroll
        
        
    }


    //clear input
    addToListInput.value = "";
}

function changeStatus(input, status){
    let changeIndex = listArray.map(t=>t.input).indexOf(input);
    listArray[changeIndex].completeStatus = status;
}





