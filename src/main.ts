interface Student {
  name: string;
  GPA: number;
  classes?: number[];
  // [key: string]: string | number | string[] | undefined | number[];
  // [key: string]: any;
}

const student: Student = {
  name: "John",
  GPA: 20,
  classes: [100, 200],
};
console.log("🚀  student =>", student);
// console.log("🚀  student =>", student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}
