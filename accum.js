
// Given a string of random letters, have the letters repeat n times according to how many unique letters appear before it 
// (ie, first letter appears one time, second letter twice). The first occurrence should be uppercase, the rest lowercase. 
// Join the letters with a dash.
const stringExpander = s => [...s].map((str, ind) => [str.toUpperCase() + str.toLowerCase().repeat(ind)]).join("-");

console.log(stringExpander("ZpglnRxqenU"));
