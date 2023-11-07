function suma (a,b,callback){
    let c = a +b;
    callback(c);
    }

function funcionDos(resultado){
    
    alert("suma resuelta: " + resultado);
}

suma (1, 2, funcionDos);
    

/* 
¿Qué es el tercer parámetro recibido?
El tercer parámetro recibido es una función callback.
Una función de callback es una función que se pasa a otra función como un argumento, 
que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

Una función ejecutable «A» se usará como argumento de otra función «B». De esta forma, al llamar 
a «B», esta ejecutará «A» */


/* 
¿En qué casos es obligatorio desarrollar este tipo de funciones?
Los callbacks pueden ayudar a no repetir código y a su mantenimiento, a conseguir funciones más específicas 
y, en ciertos casos, a mejorar el nivel de abstracción y la lectura del código. Pero, donde realmente brillan, las 
devoluciones de llamada, es en funciones asincrónicas, donde una función tiene que esperar a otra función (como 
esperar a que se cargue un archivo).*/
