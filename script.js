// Object Literal
var person = {
    /* property: value*/
    name: "Néstor",
    lastname: "Aldana",
    birthday: Date.now()
}; // JSON (JavaScript Object Notation)

// Access to propertys
console.log(person.name);
// Change object's property value
person.birthday = new Date(1997, 0, 11); // 11 - Jan - 1994
console.log(person.birthday);

console.log(person.dui) // undefined
person.dui = "000000000" // Assign 
console.log(person.dui) // 000000000

// Example
function createPerson(name, lastname, birthday, dui) {
    return {
        name,
        lastname,
        birthday,
        dui
    }
}

let list = [] // To save persons

// To Add 10 fake persons
for (let i = 0; i < 10; i++) {
    let date = new Date().setFullYear(1990 + i + Math.floor(Math.random() * 5));
    list.push(createPerson(`Name ${i}`, `Lastname ${i}`,
     date,
      `000000${i}`));
}

console.table(list);

// Array Higher function
// Show only the name persons
console.table(list.map(({
    name
}) => name));

// Get average age
console.log("Average age %i", list.reduce((sum, {
    birthday
}) => {
    /*console.log(new Date(birthday).toDateString());
    console.log(new Date(Date.now()).toDateString());*/

    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970) + sum;
}, 0) / list.length);


// More readable

function getAge(birthday) {//se revcibe la fecha de nacimineto en milisegundos
    var ageDifMs = Date.now() - birthday; //se le resta la fecha de nacimineto a la fecha actual
    var ageDate = new Date(ageDifMs); // miliseconds from epoch // se crea una nueva fecha basandose el el resultado anterior
    //console.log(ageDate.getFullYear())
    return Math.abs(ageDate.getUTCFullYear() - 1970);// previamente se obtuvo la diferencia de fechas entre el nacimiento y la actual por lo que se procede a restar '1970' que es la fecha desde la cual las conputadoras comenzaron a procesar po milisegundos, al año completo del resultado mensionado
}

console.log("Average g age %i", list.reduce((sum, {
    birthday
}) => getAge(birthday) + sum, 0) / list.length);//aprobechando la funcion reduce y la descomposicion de objetos... se manda solo la fecha de nacimineto a la funcion getage 

console.log("pureba"|| getAge(new Date(2000, 0, 11).getDate()) || ":v");


//PSD: no se encontro error en la logica(correspodiente al calculo de la edad)