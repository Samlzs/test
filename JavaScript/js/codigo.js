function operar(){
    var num1= parseInt(document.getElementById("num1").value);
    var num2= parseInt(document.getElementById("num2").value);
    var op= document.getElementById("operacion").value;

    if (op == "suma"){
        alert(`La suma de los numeros es: ${(num1+num2)}`);
        
    }


    if (op == "resta"){
        alert(`La resta de los numeros es: ${(num1-num2)}`);
        
    }


    
    if (op == "multiplicacion"){
        alert(`La multiplicacion de los numeros es: ${(num1*num2)}`);
        
    }


    
    if (op == "division"){
        alert(`La division de los numeros es: ${(num1/num2)}`);
        
    }


    
    


}


