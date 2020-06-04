
//globals

const innerCont = document.getElementById("inner-container");

//not sure why I need this seperatelly?

// function onAddElement (event) {
//     console.log("Adding SingleElement call from");
//     addElement(innerCont, "div", null, ["box", "red-box"], "Fizz");
// }

//function to add one element if element id is not zero
function addElement() {
    console.log("Adding 1 Element");
    const newEl = document.createElement('div');
    newEl.innerText = "Elements";
    innerCont.appendChild(newEl);
    

}

// function to add many elemnts
function addManyElements() {
    console.log ("Adding many elements");
    for (let i =0; i< 10; i++) {
    addElement(innerCont);
    }
}

function addHundreadElements() {
    console.log ("Adding many elements");
    for (let i =0; i< 100; i++) {
    addElement(innerCont);
    }
}

function resetElements () {
    console.log("Delete Elements");
    while (innerCont.firstChild) {
        innerCont.removeChild(innerCont.firstChild);
    }
}

// function refreshElements(){
//     console.log ("Refresh Elements");
//    

// }


// event handlers
function addEvHandlers () {
    console.log("Adding EvHandlers");

    const myEl = document.getElementById("btnThree");
    myEl.onclick = addElement;

    const myElements = document.getElementById("btnFour");
    myElements.onclick = addManyElements;

    const myManyElements = document.getElementById("btnFive");
    myManyElements.onclick = addHundreadElements;

    const myElReset = document.getElementById("btnOne");
    myElReset.onclick = resetElements;

    // const myElRefresh = document.getElementById("btnTwo");
    // myElRefresh.onclick = refreshElements;


}

addEvHandlers ();