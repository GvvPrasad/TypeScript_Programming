/*
&& (AND) → Returns true if both conditions are true
|| (OR) → Returns true if at least one condition is true
! (NOT) → Reverses the condition (true → false, false → true)
*/

const x = 3;

function checkone(x: number): void {
if (x > 5 && x < 15) {
    console.log("x is between 5 and 15");
}}

function checktwo(x: number): void {
if (x > 5 || x < 5) {
    console.log("Either x is greater than 5 or x is less than 5");
}}

function checkthree(x: number): void {
if (!(x > 5)) {
    console.log("x is not greater than 5");
}}

checkone(x);
checktwo(x);
checkthree(x);