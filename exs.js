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

console.log(students);
console.log(students[2]);
