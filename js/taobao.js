
    // var search = document.getElementById("search");
    // search.
    // function myfunction(x){
    //     x.style.outline ="none";
    // }

    var search = document.getElementById("submit");
    var option = document.getElementsByClassName("option");
    var  n=search.style.background;

    option[0].onclick = function  m(x){
        search.style.background = n;
    }

    option[1].onclick = function  m(x){
        search.style.background = "rgb(255,66,0)";
    }
   
    option[2].onclick = function  m(x){
        search.style.background = n;
    }