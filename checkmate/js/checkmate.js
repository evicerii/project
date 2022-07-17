Vue.createApp({
    data() {
        return {
            figure:['bRookLeft','bKnightLeft','bBishopLeft','bKing','bQueen','bBishopRight','bKnightRight','bRookRight'],
            positionFigure:[]
        }
    },
    methods:{
        getPosition: function (figure){
            let rowNumber=0;
            let columnNumber=0;
            while(document.getElementsByClassName('rowField')[rowNumber].querySelector('.figure')!=figure){
                rowNumber++;
            }
            while(document.getElementsByClassName('columnField')[columnNumber].querySelector('.figure')!=figure){
                columnNumber++;
            }
            columnNumber=columnNumber%8
            this.positionFigure.push(rowNumber,columnNumber)
        },
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
            //++
            for(let i=0; i <= 7; i++){
                rowNumber++;
                if(rowNumber>7 || rowNumber<0){
                    break
                }
                columnNumber++
                if (columnNumber>7 || columnNumber<0){
                    break
                }
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber];
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }
            rowNumber = this.positionFigure[0]
            columnNumber = this.positionFigure[1]
            //+-
            for(let i=0; i <= 7; i++){
                rowNumber++;
                if(rowNumber>7 || rowNumber<0){
                    break
                }
                columnNumber--;
                if (columnNumber>7 || columnNumber<0){
                    break
                }
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber];
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }
            rowNumber = this.positionFigure[0]
            columnNumber = this.positionFigure[1]
            //-+
            for(let i=0; i <= 7; i++){
                rowNumber--;
                if(rowNumber>7 || rowNumber<0){
                    break
                }
                columnNumber++
                if (columnNumber>7 || columnNumber<0){
                    break
                }
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber];
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }
            rowNumber = this.positionFigure[0]
            columnNumber = this.positionFigure[1]
            //--
            for(let i=0; i <= 7; i++){
                rowNumber--;
                if(rowNumber>7 || rowNumber<0){
                    break
                }
                columnNumber--
                if (columnNumber>7 || columnNumber<0){
                    break
                }
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber];
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }
            rowNumber = this.positionFigure[0]
            columnNumber = this.positionFigure[1]
            for(let i=0; i <= 7; i++){
                let pos = document.getElementsByClassName('rowField')[i].getElementsByClassName('columnField')[columnNumber];
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }  
            for(let t=0; t <= 7; t++){
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[t]
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            } 
        },
        showRookField: function(){
            let rowNumber = this.positionFigure[0]
            let columnNumber = this.positionFigure[1]
            for(let i=0; i <= 7; i++){
                let pos = document.getElementsByClassName('rowField')[i].getElementsByClassName('columnField')[columnNumber];
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }  
            for(let t=0; t <= 7; t++){
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[t]
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            } 
        },
        showBishopField: function(){
            let rowNumber = this.positionFigure[0]
            let columnNumber = this.positionFigure[1]
            //++
            for(let i=0; i <= 7; i++){
                rowNumber++;
                if(rowNumber>7 || rowNumber<0){
                    break
                }
                columnNumber++
                if (columnNumber>7 || columnNumber<0){
                    break
                }
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber];
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }
            rowNumber = this.positionFigure[0]
            columnNumber = this.positionFigure[1]
            //+-
            for(let i=0; i <= 7; i++){
                rowNumber++;
                if(rowNumber>7 || rowNumber<0){
                    break
                }
                columnNumber--;
                if (columnNumber>7 || columnNumber<0){
                    break
                }
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber];
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }
            rowNumber = this.positionFigure[0]
            columnNumber = this.positionFigure[1]
            //-+
            for(let i=0; i <= 7; i++){
                rowNumber--;
                if(rowNumber>7 || rowNumber<0){
                    break
                }
                columnNumber++
                if (columnNumber>7 || columnNumber<0){
                    break
                }
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber];
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }
            rowNumber = this.positionFigure[0]
            columnNumber = this.positionFigure[1]
            //--
            for(let i=0; i <= 7; i++){
                rowNumber--;
                if(rowNumber>7 || rowNumber<0){
                    break
                }
                columnNumber--
                if (columnNumber>7 || columnNumber<0){
                    break
                }
                let pos = document.getElementsByClassName('rowField')[rowNumber].getElementsByClassName('columnField')[columnNumber];
                pos.insertAdjacentHTML("afterbegin",'<div class="activeToMove"></div>');
            }
            rowNumber = this.positionFigure[0]
            columnNumber = this.positionFigure[1]
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
                    this.showRookField();
                    break;
                    case document.getElementById('bRookLeft'):
                    this.showRookField();
                    break;
                    case document.getElementById('bBishopLeft'):
                    this.showBishopField();
                    break;
                }
                //startX и startY положение курсора
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
                //Возвращение эл-ту базовых ха-к
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
        for(let i = 0; i<this.figure.length;i++){
            row[i].getElementsByClassName('columnField')[7].insertAdjacentHTML("afterbegin",`<div class="${this.figure[i]} figure" id="${this.figure[i]}"></div>`)
        }
        this.moveFigure()
    }
  }).mount('#checkmateField')