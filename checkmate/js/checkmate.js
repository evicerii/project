Vue.createApp({
    data() {
        return {
            figure:['king','queen','rook','bishop','knight','pawn']
        }
    },
    mounted(){
        let row=document.getElementsByClassName('rowField')
        let field=row[0].getElementsByClassName('columnField')[0]

        //pos black king
        let blackKing = document.createElement('div');
        blackKing.innerHTML='<div class="blackKing figure" id="blackKing"></div>';
        field.append(blackKing)
    }
  }).mount('#checkmateField')