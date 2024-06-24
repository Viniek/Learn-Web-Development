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
const namesThatStart