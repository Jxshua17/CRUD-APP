console.log("helloooo from exs.js");

const biodata = {
  name: "joshua",
  age: "100",
  email: "efihjoshua17@gmail.com",
  subject: "Mathematics",
};

console.log(biodata.name);
console.log(`
  this person's name is ${biodata.name}.
  and they are ${biodata.age} years old.
  Their email is ${biodata.email}.
  and the subject they teach at th university is ${biodata.subject}.
`);

let students = [];
students.push("joshua");
students.push("josh");
students.push("shreax");
students.push("joshhy");

//my knowledge of java is really helping me out here. lmao. what daniel said is really true. when you have learned java, javascript go be smalls. python for java. that's javascript.
for (let i = 0; i < students.length; i++) {
  if (students[i] === "shreax") {
    console.log("josh has been found");
    break;
  } else {
    console.log("josh hasn't been found yet.");
  }
}

console.log("the students are " + students);
console.log(students[2]);

students[2] = "generatorShreax";
console.log(students[2]);

let stud1 = students[1];
console.log(stud1);

//students.pop();
//i didn't have a clear understanding of what pop did which is why i kept on passing an argument but i have read d documntation and it is for removing the last element in an array.
//so i have to look for the peoper method that removes an element based on position or element.
students.splice(1, 1);
console.log("the students now are " + students);
