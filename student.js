const name = "John Doe";
const age = 25;
const grade = 90;

// using object literal

const student = {
  name,
  age,
  grade,
};

// using object destructuring

const { name: x, age: y, grade: z } = student;

// for of loop

// const num = [1, 2, 3, 4, 5];

// for (let nums of num) {
//   console.log(nums);
// }

for (let value in student) {
  console.log(value, student[value]);
}
