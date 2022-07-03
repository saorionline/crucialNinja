/*Class Game {
    constructor ( data, left = user_card, right = robot_card) {
    this.data = data;
    this.left = left;
    this.right = right;
}
*/
var robot = "Dragon";
var name = "Diana";

const stone = "Rock";
const paper = "Origami";
const scissors = "Ninja Star";

let fight = function (robot, name) {
    if (robot != name) {
        if (robot === stone && name === paper) {
            console.log (`User won with ${paper}`)
        } else if (robot === paper && name === scissors) {
            console.log (`${scissors} the user took were inevitable`)
        } else if ( robot === scissors && name === stone) {
            console.log (`${name} is rampaging the ${robot} with ${stone}`)
        } else {
            console.log (`${robot} finally learned from ${name}`)
        }
    }
}

fight (stone, paper)


