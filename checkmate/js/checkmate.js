Vue.createApp({
    data() {
        return {
            figure:['bKing','bQueen','bRookLeft','bRookRight','bBishopLeft','bBishopRight','bKnightLeft','bknightRight'],
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
            //get king rules
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
        }

    },
    mounted(){
        let row=document.getElementsByClassName('rowField')
        let bKing=row[3].getElementsByClassName('columnField')[7]
        bKing.insertAdjacentHTML("afterbegin",'<div class="blackKing figure" id="bKing"></div>')

        let figure = document.querySelector(".figure")

        let dragging = false
        let startArea
        let startX = 0
        let startY = 0


        figure.addEventListener("mousedown", (e) => {
            dragging = true
            startArea = figure.closest('.columnField').querySelector('.field');

            this.getPosition(figure)
            this.showKingField()
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
            checkSubElement(event).parentElement.append(figure)
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
                return droppableBelow;
            }
            else{
                return startArea;
            }
        }
    }
  }).mount('#checkmateField')