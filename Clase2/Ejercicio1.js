function suma (a,b,callback){
    let c = a +b;
    callback(c);
    }

function funcionDos(resultado){
    
    alert("suma resuelta: " + resultado);
}

suma (1, 2, funcionDos);
    