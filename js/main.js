function ChangeColor()
{ 
    var random = Math.random()*10;
    random = Math.floor(random)+1;

    if (random == 1)
    {document.querySelector(".motor").style.background = "coral";}
    else if (random == 2){document.querySelector(".motor").style.background = "red";}
    else if (random == 3){document.querySelector(".motor").style.background = "pink";}
    else if (random == 4){document.querySelector(".motor").style.background = "yellow";}
    else if (random == 5){document.querySelector(".motor").style.background = "orange";}
    else if (random == 6){document.querySelector(".motor").style.background = "blue";}
    else if (random == 7){document.querySelector(".motor").style.background = "green";}
    else if (random == 8){document.querySelector(".motor").style.background = "maroon";}
    else if (random == 9){document.querySelector(".motor").style.background = "brown";}
    else if (random == 2){document.querySelector(".motor").style.background = "violet";}
    else
    {document.querySelector(".motor").style.background = "peech";}
    
   
}
function Show()
{
   var colors = document.querySelector("#color").value;
   document.querySelector(".motor").style.backgroundColor =colors;
}

function Reset()
{
    document.querySelector(".motor").style.backgroundColor = "white";
}