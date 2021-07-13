const togglebtn=document.getElementsByClassName('togbtn');
// const navbar=document.getElementsByClassName('nav');

// nav scroll wheelevent
function scrol() {
    if($(this).scrollTop() >= 50){
        $('nav').addClass('nav-fixed');
        $('navbtn').addClass('nav-fixed');
    }
    else{
        $('nav').removeClass('nav-fixed');
        $('navbtn').removeClass('nav-fixed');
    }
};

window.addEventListener("wheel",scrol);

// nav toggle bar

function togggleFunc(){
    var x = document.getElementById("menu");
    if(x.style.display=="block")
    {
        x.style.display = "none";
    }
    else
    {
        x.style.display = "block";
    }
}
 
// read more button 
function morefun(){
    var y=document.getElementById("read");
    var readbtn=document.getElementById("read-btn");

     if(y.style.display=="none")
     {
         y.style.display="block";
         readbtn.innerText="read less";
     }
     else
     {
        y.style.display="none" ;  
        readbtn.innerText="read more..."
     }
}

// slider section

var span=document.getElementsByName('span');
var div = document.getElementsByClassName('slide-img');

var l = 0;

span[1].onclick = ()=>{
    l++;
    
    for(var i of div)
    {
        if(l==0){i.style.left = "0px";}
        if(l==1){i.style.left = "-370px";}
        if(l==2){i.style.left = "-740px";}
        if(l==3){i.style.left = "-1110px";}
        if(l==4){i.style.left = "-1480px";}
        if(l==5){i.style.left = "-1850px";}
        if(l>5 ) {l=5;}}                                                                                                      
    }                                                                                                           
span[0].onclick = ()=>{
        l--;
        for(var i of div)
        {
            if(l==0){i.style.left = "0px";}
            if(l==1){i.style.left = "-370px";}
            if(l==2){i.style.left = "-740px";}
            if(l==3){i.style.left = "-1110px";}
            if(l==4){i.style.left = "-1480px";}
            if(l==5){i.style.left = "-1850px";}
            if(l<0 ) {l=0;}}                                                                                                      
        }                                                                                                                                                                                                                                                       
