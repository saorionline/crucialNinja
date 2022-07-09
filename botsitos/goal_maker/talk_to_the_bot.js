const askedGoal = "Run";
const askedEnd = "August";
const hoursSaid = document.getElementById("ask_num");
const buttonWrap = document.getElementById("button_wrap");


//const responseTitle = document.getElementById("motivate");
buttonWrap.addEventListener("click", sayForClick);

console.log(hoursSaid);

function sayForClick(){
    var hoursPractice = parseInt(hoursSaid.value);
    if (hoursPractice >= 7) {

        document.write(`Until ${askedEnd} ${askedGoal} is going to be possible`);
    }
    else {
        document.write(`Sorry, you will have to rethink if ${askedGoal} is going to be possible on  ${askedEnd}`);
    }
}
