
    // var search = document.getElementById("search");
    // search.
    // function myfunction(x){
    //     x.style.outline ="none";
    // }
    oncontextmenu="return false";
    var search = document.getElementById("submit");
    var option = document.getElementsByClassName("option");
    var  n=search.style.background;
    var turn = document.getElementById("trun");


    option[0].onclick = function  m(x){
        search.style.background = n;
    }

    option[1].onclick = function  m(x){
        search.style.background = "rgb(255,66,0)";
    }
   
    option[2].onclick = function  m(x){
        search.style.background = n;
    }
    var Text= new Array("云","栖","大","会","玩","转","黑","科","技");
    let i=0;
    let m= Text[0];
    //网页跳转
    turn.onclick =function(){
        window.open("https://www.baidu.com/","_blank");
    }
     
    setInterval(
       
        function(){
            
           if(i>=Text.length){
               i=0;
               m= Text[0];
               turn.innerText = m;
           }else if(i<5){
            turn.innerText = m;
           }
           if(i==4){
               m =Text[i];
           }
           if(i>=4 &&i<=Text.length-1){
            turn.innerText = m;
            // i++;
            // m = m+Text[i];
           }
            i=i+1;
            m = m+Text[i];
        },500)
         
