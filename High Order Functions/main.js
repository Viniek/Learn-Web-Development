const names=["Vee","Njee","Victory","Njerii","Njerihh"];
//  for each
names.forEach((currentElement)=>{
const namesToLowerCase='Pretty lady'+" "+ currentElement.toLowerCase();
console.log(namesToLowerCase)
})
console.log(names)
// map
const emails=names.map((currentElement)=>{
    let emailsToLowerCase=currentElement.toLowerCase();
    return emailsToLowerCase+ "@teach2give"
})
console.log(emails)
// filter
const namesThatStartWithV=names.filter((currentElement)=>{
 return currentElement[0] ==='V' 
})
console.log(namesThatStartWithV);
    // filter grades
const grades=[{name:"vee",grade:'A'},{name:"njee",grade:"A+"}]
const studentsWithA=grades.filter((currentElement)=>{
return currentElement.grade==='A'
})
console.log(grades);
console.log(studentsWithA);
// reduce
const numbers=[1,2,3,4,5]
const sum=numbers.reduce((accumulator,currentValue)=>{
    console.log( accumulator);
    return accumulator+currentValue;
},0)
// some
const gradess=[{name:"vee",grade:'A'},{name:"njee",grade:"A+"}]
const theAs=gradess.some((currentElement)=>{
    return currentElement.gradess==="A";
})
console.log(theAs);
// every
const everyA=grades.every((currentElement)=>{
    return currentElement.grades==='A'
})
console.log(everyA);
// find
const vee=grades.find((currentElement)=>{
    return currentElement.name==="vee"
})
console.log(vee);