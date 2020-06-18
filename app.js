"use strict";
// const addBorder=(picture:string[]): string[] => {
//     const wall= "*".repeat(picture[0].length+2); //
//     picture.unshift(wall);
//     picture.push(wall);
//     for(let i=0; i<picture.length-1; i++){
//         picture[i]="*".concat(picture[i], "*");
//     }
//     return picture;
// }
// console.log(addBorder(["abc", "bbc"]));//["*******", "*abc*", "*bbc*", "*****"]
class Some {
    constructor(eyes) {
        this.me = "red"; //me = "red";
        this.eyes = eyes;
    }
}
var some = new Some(2);
console.log(some.eyes, some.me); // 2 "red"
//# sourceMappingURL=app.js.map