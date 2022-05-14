const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const handleGrading = (masterAnswerSheet, studentAnswerSheet) => {
  let grade = 0;

  for (i=0; i < masterAnswerSheet.length; i += 1) {
    if (masterAnswerSheet[i] === studentAnswerSheet[i]) {grade += 1} 
    else if (masterAnswerSheet[i] !== studentAnswerSheet[i] && studentAnswerSheet[i] !== 'N.A') {grade -= 0.5}
    // console.log(masterAnswerSheet[i], studentAnswerSheet[i], grade)
    }
  return grade  
}

const grade = (masterAnswerSheet, studentAnswerSheet, handleGrading) => handleGrading(masterAnswerSheet, studentAnswerSheet)

console.log(grade(RIGHT_ANSWERS, STUDENT_ANSWERS, handleGrading))