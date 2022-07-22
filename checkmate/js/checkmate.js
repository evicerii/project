Vue.createApp({
    data() {
        return {
            bFigure:['bRookLeft','bKnightLeft','bBishopLeft','bKing','bQueen','bBishopRight','bKnightRight','bRookRight'],
            bPawn:['1bPawn','2bPawn','3bPawn','4bPawn','5bPawn','6bPawn','7bPawn','8bPawn'],
            wPawn:['1wPawn','2wPawn','3wPawn','4wPawn','5wPawn','6wPawn','7wPawn','8wPawn'],
            wFigure:['wRookLeft','wKnightLeft','wBishopLeft','wKing','wQueen','wBishopRight','wKnightRight','wRookRight'],
            positionFigure:[],
            chessMove:'white'
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
        deleteActiveToMove: function(){
            let activeLength = document.querySelectorAll('.activeToMove').length
            --activeLength
            while(activeLength>=0){
                document.querySelectorAll('.activeToMove')[activeLength].remove()
                --activeLength
            }
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
            if (temp1>7){temp1=7}

            let temp2 = columnNumber+1;
            if (temp2>7){temp2=7}
            
            let tempRowNumber = rowNumber;
            let tempColumnNumber = columnNumber;
            
            --tempRowNumber;
            if (tempRowNumber<0){tempRowNumber=0}

            --tempColumnNumber;
            if (tempColumnNumber<0){tempColumnNumber=0}

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
            let tempArray = [[rowNumber+1, columnNumber-2], [rowNumber-1, columnNumber+2], [rowNumber+1, columnNumber+2], [rowNumber-1, columnNumber-2], [rowNumber+2, columnNumber-1], [rowNumber+2, columnNumber+1], [rowNumber-2, columnNumber+1], [rowNumber-2, columnNumber-1]]
            for(let a=0;a<tempArray.length;a++){
                tempArr(tempArray[a][0], tempArray[a][1])
            }
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
        pawnAttackField: function(rowNumber,columnNumber){
            let pos
            let attackField = columnNumber
            if((document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[attackField].querySelector('.figure'))){
                this.deleteActiveToMove()
            }
            if(document.querySelectorAll('.activeToMove').length>0){
                document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[attackField+1].insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }
            let temp1 = rowNumber
            temp1++
            if(temp1==8){
                temp1=7
            }
            pos = document.getElementsByClassName('rowField')[temp1].getElementsByClassName('columnField')[attackField]
            if(pos.querySelector('.figure')){
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }
            temp1 = rowNumber - 1
            if(temp1<0){
                temp1=0
            }
            pos = document.getElementsByClassName('rowField')[temp1].getElementsByClassName('columnField')[attackField]
            if(pos.querySelector('.figure')){
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }
        },
        showBPawnField: function(){
            let rowNumber = this.positionFigure[0]
            let columnNumber = this.positionFigure[1]
            let pos
            if(columnNumber===0){
                return
            }else if(columnNumber===6){
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
            //attachField
            this.pawnAttackField(rowNumber,columnNumber)
        },
        showWPawnField: function(){
            let rowNumber = this.positionFigure[0]
            let columnNumber = this.positionFigure[1]
            let pos
            if(columnNumber===7){
                return
            }else if(columnNumber===1){
                columnNumber++
                pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber]
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
                columnNumber++
                pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber]
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }else{
                columnNumber++
                pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber]
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }
            //attachField
            this.pawnAttackField(rowNumber, columnNumber)
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
                //sequence of moves / (check if figure is moved => mouseup)
                console.log(this.chessMove)
                if(this.chessMove=='white'){
                    switch(figure){
                        case document.getElementById('wKing'):this.showKingField();break;
                        case document.getElementById('wQueen'):this.showQueenField();break;
                        case document.getElementById('wRookRight'):this.showRookField(figure);break;
                        case document.getElementById('wRookLeft'):this.showRookField();break;
                        case document.getElementById('wBishopLeft'):this.showBishopField();break;
                        case document.getElementById('wBishopRight'):this.showBishopField();break;
                        case document.getElementById('wKnightLeft'):this.showKnightField();break;
                        case document.getElementById('wKnightRight'):this.showKnightField();break;
                        case document.getElementById('1wPawn'):this.showWPawnField();break;
                        case document.getElementById('2wPawn'):this.showWPawnField();break;
                        case document.getElementById('3wPawn'):this.showWPawnField();break;
                        case document.getElementById('4wPawn'):this.showWPawnField();break;
                        case document.getElementById('5wPawn'):this.showWPawnField();break;
                        case document.getElementById('6wPawn'):this.showWPawnField();break;
                        case document.getElementById('7wPawn'):this.showWPawnField();break;
                        case document.getElementById('8wPawn'):this.showWPawnField();break;
                    }
                }else{ 
                    switch(figure){
                        case document.getElementById('bKing'):this.showKingField();break;
                        case document.getElementById('bQueen'):this.showQueenField();break;
                        case document.getElementById('bRookRight'):this.showRookField(figure);break;
                        case document.getElementById('bRookLeft'):this.showRookField();break;
                        case document.getElementById('bBishopLeft'):this.showBishopField();break;
                        case document.getElementById('bBishopRight'):this.showBishopField();break;
                        case document.getElementById('bKnightLeft'):this.showKnightField();break;
                        case document.getElementById('bKnightRight'):this.showKnightField();break;
                        case document.getElementById('1bPawn'):this.showBPawnField();break;
                        case document.getElementById('2bPawn'):this.showBPawnField();break;
                        case document.getElementById('3bPawn'):this.showBPawnField();break;
                        case document.getElementById('4bPawn'):this.showBPawnField();break;
                        case document.getElementById('5bPawn'):this.showBPawnField();break;
                        case document.getElementById('6bPawn'):this.showBPawnField();break;
                        case document.getElementById('7bPawn'):this.showBPawnField();break;
                        case document.getElementById('8bPawn'):this.showBPawnField();break;
                    }
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
                let pos = checkSubElement(event)
                if(pos.querySelector('.figure')){
                    pos.querySelector('.figure').remove()
                }

                checkSubElement(event).append(figure)
                this.deleteActiveToMove()
                //check if figure is moved
                if(figure.parentElement != startArea){
                    switch(this.chessMove){
                        case 'white': this.chessMove = 'black'; break;
                        case 'black': this.chessMove = 'white'; break;
                    }
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
                let droppableBelow = elemBelow.closest('.columnField').querySelector('.activeToMove');
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
        //pos Figure 1 row
        for(let i = 0; i<this.wFigure.length;i++){
            row[i].getElementsByClassName('columnField')[0].insertAdjacentHTML("afterbegin",`<div class="${this.wFigure[i]} figure white" id="${this.wFigure[i]}"></div>`)
        }

        //pos Figure 2 row
        for(let i = 0; i<this.bPawn.length;i++){
            row[i].getElementsByClassName('columnField')[1].insertAdjacentHTML("afterbegin",`<div class="wPawn figure white" id="${this.wPawn[i]}"></div>`)
        }

        //pos Figure 7 row
        for(let i = 0; i<this.bPawn.length;i++){
            row[i].getElementsByClassName('columnField')[6].insertAdjacentHTML("afterbegin",`<div class="bPawn figure black" id="${this.bPawn[i]}"></div>`)
        }
        //pos Figure 8 row
        for(let i = 0; i<this.bFigure.length;i++){
            row[i].getElementsByClassName('columnField')[7].insertAdjacentHTML("afterbegin",`<div class="${this.bFigure[i]} figure black" id="${this.bFigure[i]}"></div>`)
        }
        this.moveFigure()
    }
  }).mount('#checkmateField')