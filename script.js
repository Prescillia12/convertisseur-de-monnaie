let euros = document.getElementById("Euros");
let dollar = document.getElementById("Dollar");
let livre = document.getElementById("Livre sterling");
euros.addEventListener("input",function(){convmonnaie(this.id, this.value);});
dollar.addEventListener("input",function(){convmonnaie(this.id, this.value);});
livre.addEventListener("input",function(){convmonnaie(this.id, this.value);})

function convmonnaie(id, value)
{
    if (id == "Euros") { 

        dollar.value = value * 1.16;
        livre.value = value * 0.85;
        
    }
     else if (id == "Dollar")
     { 
        
        euros.value = value * 0.86;
        livre.value = value * 0.73;

    }

    else if (id == "livre sterling")
    {
        euros.value = value * 1.18;
        dollar.value = value * 1.38;

    }
}