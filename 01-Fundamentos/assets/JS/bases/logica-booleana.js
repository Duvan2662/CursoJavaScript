const regresaTrue = () => {
    console.log('Regresa TRUE');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa FALSE');
    return false;
}


//Logica BOLEANA 
//Negacion
console.warn('Not o la negacion');
console.log(true);
console.log(! true) //Lo paso a falso con !;
console.log(! false) //Lo paso a true con !;
console.log( ! regresaFalse());

//AND
console.warn('AND o Y'); //true si todos los valores son  verdaderos
console.log(true && true); //verdadero
console.log(true && false); //false

console.log('=============');
console.log(regresaFalse() && regresaTrue()); //false pero no entra a la funcion regresaTrue por que la primera funcion regresa false
console.log(regresaTrue() && regresaFalse() ); //false pero si entra a la funcion regresaTrue por que la primera funcion regresa true y necesita evaluar la siguiente funcion 

console.log('======&&=======');
regresaFalse() && regresaTrue()
console.log('======&&=======')
regresaTrue() && regresaFalse()

//OR 
console.warn('OR o O'); //true si por lo menos un valor es verdadero
console.log(true || false); //verdadero
console.log(false || false); //false


console.log('=============');
console.log(regresaTrue() || regresaFalse() ); //true pero pero no entra a la funcion regresaFalse por que la primera funcion regresa true 

console.log(regresaFalse() ||  regresaTrue()); //true pero pero si entra a la funcion regresaTrue por que la primera funcion regresa false y necesita evaluar la siguiente funcion 


//Asginaciones 
console.warn('Asignaciones'); //true si por lo menos un valor es verdadero

const soyUndefined = undefined;
const soyNull = null;
const soyfalso= false;
const a1 = true && 'Hola mundo' && 150;
const a2 = 'hola' && 'mundo' && soyfalso && true;
const a3 = soyfalso || 'Ya no soy falso';
const a4 = soyfalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo '|| true;
const a5 = soyfalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo ' || true;


console.log({a1, a2, a3, a4, a5});

