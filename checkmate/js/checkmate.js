Vue.createApp({
    data() {
        return {
            bFigure:['bRookLeft','bKnightLeft','bBishopLeft','bKing','bQueen','bBishopRight','bKnightRight','bRookRight'],
            bPawn:['1bPawn','2bPawn','3bPawn','4bPawn','5bPawn','6bPawn','7bPawn','8bPawn'],
            wPawn:['1wPawn','2wPawn','3wPawn','4wPawn','5wPawn','6wPawn','7wPawn','8wPawn'],
            positionFigure:[]
        }
    },
    methods:{
        getPosition: function (figure){
            let rowNumber=0;
            let columnNumber=0;
            let arr = Array.from(document.getElementsByClassName('rowField')[rowNumber].querySelectorAll('.figure'))
            while(!arr.includes(figure)){
                rowNumber++
                arr = Array.from(document.getElementsByClassName('rowField')[rowNumber].querySelectorAll('.figure'))
            }
            while(document.getElementsByClassName('columnField')[columnNumber].querySelector('.figure')!=figure){
                columnNumber++;
            }
            columnNumber=columnNumber%8
            this.positionFigure.push(rowNumber,columnNumber)
        },
        //get closest figure to active elem
        getClosestPosLeft: function(rowNumber, columnNumber, newStartPos){
            for(let i=0; i < rowNumber; i++){
                let pos = document.getElementsByClassName('rowField')[i].getElementsByClassName('columnField')[columnNumber];
                if (pos.querySelector('.figure')){
                    newStartPos = pos.querySelector('.figure')
                }
            } 
            if(newStartPos){
                this.positionFigure=[]
                this.getPosition(newStartPos)
                newStartPos = this.positionFigure[0]
            }
            return newStartPos
        },
        getClosestPosTop: function(rowNumber, columnNumber, newStartPos){
            for(let i=0; i < columnNumber; i++){
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[i];
                if (pos.querySelector('.figure')){
                    newStartPos = pos.querySelector('.figure')
                }
            } 
            if(newStartPos){
                this.positionFigure=[]
                this.getPosition(newStartPos)
                newStartPos = this.positionFigure[1]
            }
            return newStartPos
        },
        //show pos to move
        showKingField: function(){
            let rowNumber = this.positionFigure[0]
            let columnNumber = this.positionFigure[1]
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
            
        },
        showQueenField: function(){
            let rowNumber = this.positionFigure[0]
            let columnNumber = this.positionFigure[1]
            this.showBishopField()
            this.showRookField()
        },
        showRookField: function(){
            let rowNumber = this.positionFigure[0]
            let columnNumber = this.positionFigure[1]
            let newStartPos = 0
            //left fields
            {
                newStartPos = this.getClosestPosLeft(rowNumber, columnNumber, newStartPos)
                while(newStartPos<rowNumber){
                    let pos = document.getElementsByClassName('rowField')[newStartPos].getElementsByClassName('columnField')[columnNumber];
                    pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
                    newStartPos++
                }
                newStartPos = 0
            }
            //right fields
            for(let i=rowNumber+1; i <= 7; i++){
                let pos = document.getElementsByClassName('rowField')[i].getElementsByClassName('columnField')[columnNumber];
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
                if(pos.querySelector('.figure')){
                    break;
                }
            }  
            //top fields
            {
                newStartPos = this.getClosestPosTop(rowNumber, columnNumber, newStartPos)
                while(newStartPos<columnNumber){
                    let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[newStartPos];
                    pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
                    newStartPos++
                }
                newStartPos = 0
            }
            //bottom field
            for(let i=columnNumber+1; i <= 7; i++){
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[i]
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');     
                if(pos.querySelector('.figure')){
                    break;
                }
            } 
        },
        showBishopField: function(){
            let rowNumber = this.positionFigure[0]
            let columnNumber = this.positionFigure[1]

        // right/bottom

            for(let i=0; i <= 7; i++){
                rowNumber++;
                columnNumber++
                if(rowNumber>7 || rowNumber<0 || columnNumber>7 || columnNumber<0){
                    break
                }
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber];
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
                if(pos.querySelector('.figure')){
                    break;
                }
            }
            rowNumber = this.positionFigure[0]
            columnNumber = this.positionFigure[1]

        //  right/top

            for(let i=0; i <= 7; i++){
                rowNumber++;
                columnNumber--;
                if(rowNumber>7 || rowNumber<0 || columnNumber>7 || columnNumber<0){
                    break
                }
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber];
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
                if(pos.querySelector('.figure')){
                    break;
                }
            }
            rowNumber = this.positionFigure[0]
            columnNumber = this.positionFigure[1]

        //  left/bottom

            for(let i=7; i >= 0; i--){
                rowNumber--;
                columnNumber++
                if(rowNumber>7 || rowNumber<0 || columnNumber>7 || columnNumber<0){
                    break
                }
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber];
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
                if(pos.querySelector('.figure')){
                    break;
                }
            }
            rowNumber = this.positionFigure[0]
            columnNumber = this.positionFigure[1]

        //  left/top

            for(let i=7; i >= 0; i--){
                rowNumber--;
                columnNumber--
                if(rowNumber>7 || rowNumber<0 || columnNumber>7 || columnNumber<0){
                    break
                }
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber];
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
                if(pos.querySelector('.figure')){
                    break;
                }
            }
            rowNumber = this.positionFigure[0]
            columnNumber = this.positionFigure[1]
        },
        showKnightField: function(){
            let rowNumber = this.positionFigure[0]
            let columnNumber = this.positionFigure[1]
            let posArray = []
            let temp1
            let temp2

            temp1 = rowNumber+1
            temp2= columnNumber-2
            tempArr(temp1, temp2)
            temp1 = rowNumber-1
            temp2= columnNumber-2
            tempArr(temp1, temp2)
            temp1 = rowNumber+1
            temp2= columnNumber+2
            tempArr(temp1, temp2)
            temp1 = rowNumber-1
            temp2= columnNumber+2
            tempArr(temp1, temp2)
            temp1 = rowNumber+2
            temp2= columnNumber+1
            tempArr(temp1, temp2)
            temp1 = rowNumber+2
            temp2= columnNumber-1
            tempArr(temp1, temp2)
            temp1 = rowNumber-2
            temp2= columnNumber+1
            tempArr(temp1, temp2)
            temp1 = rowNumber-2
            temp2= columnNumber-1
            tempArr(temp1, temp2)
            for(let i = 0; i < posArray.length; i++){
                posArray[i].insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }
            //create array for active field
            function tempArr(temp1, temp2){
                if((temp1 < 0) || (temp2 < 0) || (temp1 > 7) || (temp2 > 7)){
                    return posArray
                }else{
                    let pos = document.getElementsByClassName('rowField')[temp1].getElementsByClassName('columnField')[temp2];
                    posArray.push(pos)
                }
            }
        },
        showBPawnField: function(){
            let rowNumber = this.positionFigure[0]
            let columnNumber = this.positionFigure[1]
            let pos
            if(columnNumber===0){
                return
            }
            if(columnNumber===6){
                columnNumber--
                pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber]
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
                columnNumber--
                pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber]
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }else{
                columnNumber--
                pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber]
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }
        },
        moveFigure: function(){
            let figure
            let dragging
            let startArea
            let startX = 0
            let startY = 0
    
            document.getElementById('checkmateField').addEventListener("mousedown", (e) => {
                dragging = true
                figure = document.elementFromPoint(e.clientX, e.clientY)
                startArea = figure.parentElement;
                this.getPosition(figure)
                switch(figure){
                    case document.getElementById('bKing'):
                    this.showKingField();
                    break;
                    case document.getElementById('bQueen'):
                    this.showQueenField();
                    break;
                    case document.getElementById('bRookRight'):
                    this.showRookField(figure);
                    break;
                    case document.getElementById('bRookLeft'):
                    this.showRookField();
                    break;
                    case document.getElementById('bBishopLeft'):
                    this.showBishopField();
                    break;
                    case document.getElementById('bBishopRight'):
                    this.showBishopField();
                    break;
                    case document.getElementById('bKnightLeft'):
                    this.showKnightField();
                    break;
                    case document.getElementById('bKnightRight'):
                    this.showKnightField();
                    break;
                    case document.getElementById('1bPawn'):
                    this.showBPawnField();
                    break;
                    case document.getElementById('2bPawn'):
                    this.showBPawnField();
                    break;
                    case document.getElementById('3bPawn'):
                    this.showBPawnField();
                    break;
                    case document.getElementById('4bPawn'):
                    this.showBPawnField();
                    break;
                    case document.getElementById('5bPawn'):
                    this.showBPawnField();
                    break;
                    case document.getElementById('6bPawn'):
                    this.showBPawnField();
                    break;
                    case document.getElementById('7bPawn'):
                    this.showBPawnField();
                    break;
                    case document.getElementById('8bPawn'):
                    this.showBPawnField();
                    break;
                }
                //startX,startY get pointer
                startX = e.pageX - Number.parseInt(figure.style.left || 0)
                startY = e.pageY - Number.parseInt(figure.style.top || 0)
            })
    
            document.body.addEventListener("mousemove", (e) => {
                if(!dragging){
                    return
                }
                figure.style.top = `${e.pageY - startY}px`
                figure.style.left = `${e.pageX - startX}px`
            })
    
            document.body.addEventListener("mouseup", (event) => {
                checkSubElement(event).append(figure)
                let activeLength = document.querySelectorAll('.activeToMove').length
                --activeLength
                while(activeLength>=0){
                    document.querySelectorAll('.activeToMove')[activeLength].remove()
                    --activeLength
                }
                figure.style.left = '';
                figure.style.top = '';
                this.positionFigure=[]
                dragging=false
            })
    
            function checkSubElement(event){
                figure.style.display = 'none';
                let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
                figure.style.display = 'block';
                if (!elemBelow) return;
                let droppableBelow = elemBelow.closest('.activeToMove');
                if (droppableBelow){
                    return droppableBelow.parentElement;
                }
                else{
                    return startArea;
                }
            }
        }
    },
    mounted(){
        let row=document.getElementsByClassName('rowField')
        //pos Figure 7 row
        for(let i = 0; i<this.bPawn.length;i++){
            row[i].getElementsByClassName('columnField')[6].insertAdjacentHTML("afterbegin",`<div class="bPawn figure" id="${this.bPawn[i]}"></div>`)
        }
        //pos Figure 8 row
        for(let i = 0; i<this.bFigure.length;i++){
            row[i].getElementsByClassName('columnField')[7].insertAdjacentHTML("afterbegin",`<div class="${this.bFigure[i]} figure" id="${this.bFigure[i]}"></div>`)
        }
        this.moveFigure()
    }
  }).mount('#checkmateField')