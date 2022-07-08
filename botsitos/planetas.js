"use strict";

const earthGravity = 9.807;
const marsGravity = 3.721;
const jupiterGravity = 24.8;

const prompt = require("prompt-sync")({siginit: true});
let userWeight = prompt("How much do you weight?");
let planet  = parseInt(prompt("If you want to know how much you weight in Mars press 1, for Jupiter press 2"));
let weight = parseFloat(userWeight);
let totalWeight;
var name;

if(planet==1) {
    totalWeight = weight * marsGravity / earthGravity;
    var name = "marte";
}
else if(planet==2) {
    totalWeight = jupiterGravity * weight / earthGravity;
    var name = "jupiter";
}
else{
    totalWeight = 1000000;
    var name = "cripton";
}
totalWeight = parseInt(totalWeight);

console.log(`You weight in ${name} is  ${totalWeight} kilos.`);
/*
const weight = parseFloat(prompt);

const totalWei ght = (weight * marsGravity) / earthGravity;
console.log(`You weight ${totalWeight} kilos`);
*/