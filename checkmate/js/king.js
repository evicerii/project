//base number of activeToMove / showKingField() value of numbers==0
let rowNumber=0;
let columnNumber=0;

//get pos figure
function getPosition(){
    while(document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('figure')[1]!=document.getElementById('blackKing')){
        rowNumber++;
    }
    while(document.getElementsByClassName('columnField')[columnNumber].getElementsByClassName('figure')[0]!=document.getElementById('blackKing')){
        columnNumber++;
    }
    columnNumber=columnNumber%8
}

//king field's
function showKingField(){
    //get king rules
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

    //show field's

    while((tempRowNumber) <= (temp1)){
        while((tempColumnNumber) <= (temp2)){
            let pos = document.getElementsByClassName('rowField')[tempRowNumber].getElementsByClassName('columnField')[tempColumnNumber]
            pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            tempColumnNumber++;
        }
        tempColumnNumber=columnNumber-1;
        if (tempColumnNumber<0){
            tempColumnNumber=0
        }
        tempRowNumber++;
    }
    
    rowNumber=0;
    columnNumber=0;
}

export{showKingField, getPosition}