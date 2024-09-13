function RANDOM(){
    let P1=document.getElementById('P1');

    let random1 =Math.floor(Math.random()*3)+1;
    if(random1=== 1){
        P1.src="./images/rock-p1.png";
    }else if(random1===2){
        P1.src="./images/paper-p1.png";
    }else if(random1===3){
        P1.src="./images/scissors-p1.png";
    }
    
    
    let P2=document.getElementById('P2');
    let random2 =Math.floor(Math.random()*3)+1;
    if(random2=== 1){
        P2.src="./images/rock-p2.png";
    }else if(random2===2){
        P2.src="./images/paper-p2.png";
    }else if(random2===3){
        P2.src="./images/scissors-p2.png";
        
        
    }
    
    let result=document.getElementById('score');
    let P1score=document.getElementById('P1-score');
    let P2score=document.getElementById('P2-score');
    let WIN=document.getElementById('WIN');
    let ROUND=document.getElementById('ROUND');
    let P1P=document.getElementById('P1-points');
    let P2P=document.getElementById('P2-points');
    if(random1===random2){
        result.textContent='It is a tie!';
        P1.style='';
            P2.style='';
            WIN.textContent= '';
    }
    else if((random1===1 && random2===3) || (random1===2 && random2===1) || (random1===3 && random2===2)){
        
        result.textContent='Player 1 wins!';
        P1score.textContent=parseInt(P1score.textContent)+1;
        
        if(P1score.textContent==='3'){
            WIN.textContent='Player 1 win this match!';
            P1score.textContent= '0';
            P2score.textContent= '0';
            result.textContent = '';
            ROUND.textContent++;
            P1P.textContent++;
            
            P1.style='border : 5px solid green '
            P2.style='';
        }else{
            WIN.textContent='';
            P1.style='';
            P2.style='';
        }
        
    }
    else{
        result.textContent='Player 2 wins!';
        P2score.textContent=parseInt(P2score.textContent)+1;
        if(P2score.textContent=='3'){
            WIN.textContent='Player 2 win this match!';
            P1score.textContent= '0';
            P2score.textContent= '0';
            result.textContent = '';
            ROUND.textContent++;
            P2P.textContent++;
            P2.style='border : 5px solid green'
            P1.style='';
        }else{
            WIN.textContent='';
            P1.style='';
            P2.style='';
        }
    }
    }
    function RESET(){
        let P1=document.getElementById('P1');
        let P2=document.getElementById('P2');
    let result=document.getElementById('score');
    let P1score=document.getElementById('P1-score');
    let P2score=document.getElementById('P2-score');
    let WIN=document.getElementById('WIN');
    let ROUND=document.getElementById('ROUND');
    let P1P=document.getElementById('P1-points');
    let P2P=document.getElementById('P2-points');

    P1score.textContent= '0';
    P2score.textContent= '0';
    result.textContent = '';
    WIN.textContent='';
    ROUND.textContent= '1';
    P1P.textContent= '0';
    P2P.textContent= '0';
    P1.src="./images/bg.jpg";
    P2.src="./images/bg.jpg";
    P1.style='';
    P2.style='';
    }
    




