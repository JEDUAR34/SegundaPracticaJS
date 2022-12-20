
        peso=parseFloat(prompt("Ingresa tu peso en Kg:"));
        planeta=prompt("En que planeta quieres saber tu peso: \n Selecciona 1 para el planeta Marte \n Selecciona 2 para el planeta Jupiter")
        var gtierra = 9.8;
        var gmarte = 3.7;
        var gjupiter = 24.8;
        var pesofinal;
        if(planeta==1)
        { 
            pesofinal=peso*gmarte/gtierra;
            document.write("Su peso en el planeta marte es: " + pesofinal + " Kg");
        }
        else if(planeta==2)
        {
            pesofinal=peso*gjupiter/gtierra;
            document.write("Su peso en el planeta jupiter es:" + pesofinal + " Kg");
        }
        else {
            alert("Ingrese un valor correcto");
        }

