
let rowNumber=0;
let columnNumber=0;

//get pos figure
while(document.getElementsByClassName('rowField')[rowNumber].querySelector('.figure')!=document.getElementById('blackKing')){
    rowNumber++;
}
while(document.getElementsByClassName('columnField')[columnNumber].querySelector('.figure')!=document.getElementById('blackKing')){
    columnNumber++;
}
columnNumber=columnNumber%8
let nowPosFigure=[rowNumber,columnNumber]
console.log(nowPosFigure)



let temp1 = rowNumber+1;
if (temp1>7){
    temp1=7
}
let temp2 = columnNumber+1;
if (temp2>7){
    temp2=7
}

let tempRowNumber = rowNumber;
let tempColumnNumber = columnNumber;

--tempRowNumber;
if (tempRowNumber<0){
    tempRowNumber=0
}
--tempColumnNumber;
if (tempColumnNumber<0){
    tempColumnNumber=0
}
//king
function showKingField(){
    while((tempRowNumber) <= (temp1)){
        while((tempColumnNumber) <= (temp2)){
            let pos = document.getElementsByClassName('rowField')[tempRowNumber].getElementsByClassName('columnField')[tempColumnNumber]
            pos.insertAdjacentHTML("beforebegin",'<div class="activeToMove"></div>');
            tempColumnNumber++;
        }
        tempColumnNumber=columnNumber-1;
        if (tempColumnNumber<0){
            tempColumnNumber=0
        }
        tempRowNumber++;
    }
}
showKingField()
// export{showKingField}
temp1 = null;
temp2 = null;
tempRowNumber = null;
tempColumnNumber = null;