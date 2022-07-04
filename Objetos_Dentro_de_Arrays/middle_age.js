const bigLibrary = [
    {
        first_part: "Prehistoria",
        second_part: "Homo Sapiems",
        age_date: 2,
        cleanBook: function(){
            console.log(`Limpiando ${this.second_part}`);
        }
    },
    {
        first_part: "Edad Antigua",
        second_part: "Imperios precursores",
        age_date: 4,
        cleanBook: function(){
            console.log(`Limpiando ${this.second_part}`);
        }
    },
    {
        first_part: "Edad Media",
        second_part: "Sistema social",
        age_date: 1400,
        cleanBook: function(){
            console.log(`Limpiando ${this.second_part}`);
        }
    },
    {
        first_part: "Edad Moderna",
        second_part: "Capitalismo urbano",
        age_date: 1400,
        cleanBook: function(){
            console.log(`Limpiando ${this.second_part}`);
        }
    },
    {
        first_part: "Edad Contemporánea",
        second_part: "Multiplicación humana e inventos",
        age_date: 1800,
        cleanBook: function(){
            console.log(`Limpiando ${this.second_part}`);
        }
    },
    {
        first_part: "Edad Postmoderna",
        second_part: "Boom digital",
        age_date: 2000,
        cleanBook: function(){
            console.log(`Limpiando ${this.second_part}`);
        }
    },
    {
        first_part: "Edad Ultrapostmoderna",
        second_part: "Crisis de la salud",
        age_date: 2019,
        cleanBook: function(){
            console.log(`Limpiando ${this.second_part}`);
        }
    }
    ]

let studentVisit = bigLibrary.filter( function(bigLibrary){
    return bigLibrary.first_part == "Edad Ultrapostmoderna"
});
    
console.log(studentVisit);

let teacherVisit = bigLibrary.map( function(bigLibrary) {
    return bigLibrary.age_date
    }
);

console.log(teacherVisit);