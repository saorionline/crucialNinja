const students = [ "Edward", "Bart", "Sheldon", "Mabel"];

function presentation(trainer){
    console.log(`Good morning ${trainer}`);
}

while(students.length > 0){
    /*debugging
    console.log(students);
     */
    var trainer = students.shift();
    presentation(trainer);
}

