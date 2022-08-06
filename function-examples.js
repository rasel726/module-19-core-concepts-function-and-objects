/**
 * function functionName (parameters){
 *  function body
 *  return
 * }
 * 
 * var returnedValue = functionName(parameters value)
 */

function getAvarage(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const avarage = total / 3;
    return avarage;
}

const assign1Marks = 60;
const assign2Marks = 58;
const assign3Marks = 59;

var myAvarage = getAvarage(assign1Marks, assign2Marks, assign3Marks);
console.log('my avarage so far', myAvarage);