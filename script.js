async function clickMagicBall(){
    document.getElementsByClassName("ans")[0].style.opacity="1";
    document.getElementsByClassName("ans")[1].style.opacity="1";
    document.getElementsByClassName("ans")[2].style.opacity="1";
    document.getElementsByClassName("ans")[3].style.opacity="1";
    document.getElementsByClassName("ans")[0].style.animation="";
    document.getElementsByClassName("ans")[1].style.animation="";
    document.getElementsByClassName("ans")[2].style.animation="";
    document.getElementsByClassName("ans")[3].style.animation="";
    var randomnum=Math.floor(Math.random()*30);
    var answer=document.getElementsByClassName("ans")[0];
    for(var a=0; a<randomnum; a++){
            console.log(randomnum, a);
            if(a%4==0){
                    document.getElementsByClassName("ans")[0].style.color="#fff";
    document.getElementsByClassName("ans")[1].style.color="#000";
    document.getElementsByClassName("ans")[2].style.color="#000";
    document.getElementsByClassName("ans")[3].style.color="#000";
     answer=document.getElementsByClassName("ans")[0];
            }
            else if(a%4==3){
                    document.getElementsByClassName("ans")[1].style.color="#fff";
    document.getElementsByClassName("ans")[0].style.color="#000";
    document.getElementsByClassName("ans")[2].style.color="#000";
    document.getElementsByClassName("ans")[3].style.color="#000";
     answer=document.getElementsByClassName("ans")[1];
            }
                        else if(a%4==1){
                    document.getElementsByClassName("ans")[2].style.color="#fff";
    document.getElementsByClassName("ans")[0].style.color="#000";
    document.getElementsByClassName("ans")[1].style.color="#000";
    document.getElementsByClassName("ans")[3].style.color="#000";
     answer=document.getElementsByClassName("ans")[2];
            }
                        else if(a%4==2){
                    document.getElementsByClassName("ans")[3].style.color="#fff";
    document.getElementsByClassName("ans")[0].style.color="#000";
    document.getElementsByClassName("ans")[2].style.color="#000";
    document.getElementsByClassName("ans")[1].style.color="#000";
     answer=document.getElementsByClassName("ans")[3];
            }
            await new Promise(b=>setTimeout(b,250));

    }
   answer.style.animation="selectans linear forwards";
   answer.style.animationDuration="1s";
}