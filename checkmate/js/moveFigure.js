document.onmousedown = function(event){
    let figure = event.target.closest('.figure');
    if (!figure) return;
    //базовая позиция под указателем
    let shiftX= event.clientX - figure.getBoundingClientRect().left;
    let shiftY= event.clientY - figure.getBoundingClientRect().top;

    //проверка старт. подэлемента
    figure.style.display = 'none';
    let startElemBelow = document.elementFromPoint(event.clientX, event.clientY);
    figure.style.display = 'block';
    
    let startArea = startElemBelow.closest('.field');
    
    //исключение привязки к блоку
    document.body.append(figure);
    figure.style.zIndex = 1000;

    function moveAt(pageX, pageY) {
        figure.style.top = `${pageY - shiftY}px`
        figure.style.left = `${pageX - shiftX}px`
    }

    function onMouseMove(event){
        moveAt(event.pageX, event.pageY);
        
        console.log("x",figure.style.left)
        console.log("y",figure.style.top)
    }

    document.addEventListener('mousemove', onMouseMove);

    figure.onmouseup = function(){
        //проверка конечной позиции
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
        console.log(checkSubElement());
        
        let droppableBelow = checkSubElement();

        console.log(droppableBelow);

        droppableBelow.append(figure);

        document.removeEventListener('mousemove', onMouseMove);

        //Возвращение эл-ту базовых ха-к
        figure.style.left = '';
        figure.style.top = '';
        figure = null;
    }

    figure.ondragstart = function() {
        return false;
    }
}