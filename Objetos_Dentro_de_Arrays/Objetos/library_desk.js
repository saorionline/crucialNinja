//Objetos se denominan con propiedad y las propiedades son con palabras clave y valores
var library_desk = {
    primary_bottom: "Zona A",
    secondary_bottom: "Zona B",
    building_date: 2002,
    cleanDesk: function(){
        console.log(`Limpiando ${this.secondary_bottom}`);
                        }
};
// para llamar los objetos dentro del array usamos []
// para los objetos usamos .nombredelobjeto

console.log(library_desk);
console.log(library_desk.primary_bottom);
console.log(library_desk.cleanDesk());

//Así ya entiendo que es un objeto y cómo lo puedo construir, esto es más manual.

function preHistory(cover, classify, vocabuly) {
    this.cover = cover;
    this.classify = classify;
    this.vocabuly = vocabuly;
}

// Después de hacer mi plantilla, genero una nueva instancia de la función constructora. 
// Un objeto que deriva de otro.

var bookPrehistory = new preHistory("Title", "List", "Words");
var notebookPreh = new preHistory("Name", "Homeworks", "Teacher");
var agendaPreh = new preHistory("Deliver", "Academy", "Student");

console.log(bookPrehistory);
console.log(notebookPreh);
console.log(agendaPreh);