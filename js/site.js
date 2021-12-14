"use strict";

let newElem = document.createElement("div");
document.getElementById('root').appendChild(newElem);

newElem.innerHTML +=`
<form action="" method="POST" name="colorPicker">
<input name="red" type="number"/>
<input name="green" type="number"/>
<input name="blue" type="number"/>
<input type="submit" />
</form>
`
let newElemSecond = document.createElement("div");
document.getElementById('root').appendChild(newElemSecond);


newElemSecond.innerHTML+=`
<div id="displayDiv"> Look at this color</div>
<button type="button" onClick="dispColor()"> Display Color </button>
<button type="button" onClick="keepColor()"> Keep Color </button>
`

let req = colorPicker.elements

let newColor = {

    retColor(){

        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }
}


newElem.addEventListener('submit',(evnt)=>{
    evnt.preventDefault();

    let r = req.red.value;
    let g=  req.green.value;
    let b = req.blue.value ;

    newColor.r=r;
    newColor.g=g;
    newColor.b=b;
console.log(newColor);
})



let dispColor=()=>{
    console.log("alfskn")
    let displ = document.getElementById("displayDiv");
    displ.style.backgroundColor = newColor.retColor();
    displ.style.color = "silver";

}

const keepColor=()=>{
    let addColor = document.createElement("div");
document.getElementById('root').appendChild(addColor);

addColor.innerHTML+=`
<lable>Plase add a name to this color </lable>
<input type="text" name="colorName" id="newColor">
<button type="button" onClick="saveColor()"> Save Color </button>
`
   
}

const saveColor=()=>{
    let myLikedColors = document.getElementById('newColor').value;
 let likedColor = `rgb(${newColor.r},${newColor.g},${newColor.b})`
     
     localStorage.setItem(`${myLikedColors}` ,JSON.stringify(likedColor))
    }