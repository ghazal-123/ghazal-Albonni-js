// =============================================================
// Level 2 · Task 2 — Conditions
// =============================================================
// The functions are already set up. Fill in the part inside { }.

// TODO 1: return true if age is 18 or more, otherwise false
function canVote(age) {
if (age >= 18) {
    return true;
}
return false;
}

console.log (canVote(18));

// TODO 2: 90+ "A", 80+ "B", 70+ "C", 60+ "D", otherwise "F"
//         Start from the HIGHEST grade and work down.
function letterGrade(score) {
if(score >= 90) {
    return "A";
}
if(score >= 80) {
    return "B";
}
if(score >= 70) {
    return "C";
}
if(score >= 60) {
    return "D";
}
return "F";
}
console.log(letterGrade(85));

// TODO 3: under 5 → 0, under 18 → 5, 65 or older → 7, otherwise → 10
function ticketPrice(age) {
if (age < 5) {
    return 0;
}
if (age < 18) {
    return 5;
}
if (age >= 65) {
    return 7;
}
return 10;
}

console.log(ticketPrice(70));

// TODO 4: true only if age is 12 or more AND hasTicket is true
//         && means "and": both sides must be true
function canEnter(age, hasTicket) {
if (age >= 12 && hasTicket) {
    return true;
}
return false;
}
console.log(canEnter(15, true));

// Try them out:
console.log("letterGrade(85) =", letterGrade(85));
console.log("ticketPrice(70) =", ticketPrice(70));
