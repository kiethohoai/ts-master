// TODO Type Aliases
// type stringOrNumber = string | number;
// type stringOrNumberArray = (string | number)[];

// interface Guitarist {
//   name: string;
//   active: boolean;
//   albums: stringOrNumberArray;
// }

// => Allowed
// type UserId = stringOrNumber;

// => Not Allowed
// interface PostId = stringOrNumber;

// TODO Literal Types
// let myName = "David";
// myName = "John";

// let userName: "david" | "john" | "bob";
// userName = "john";
// userName = "kiet";

// TODO Function
// const add = (a: number, b: number): number => {
//   return a + b;
// };

// const logMessage = (message: any): void => {
//   console.log("🚀  message =>", message);
// };
// logMessage("Hello World!");
// logMessage(123456789);
// logMessage(true);
// logMessage(add(2, 3));

// interface MathFunction {
//   (a: number, b: number): number;
// }
// type MathFunction = (a: number, b: number) => number;
// const multiply: MathFunction = (a, b) => a * b;
// console.log("🚀  multiply =>", multiply(10, 10));

// TODO Optional Parameters
// ex1. optional parameter
// const addAll = (a: number, b: number, c?: number): number => {
//   if (typeof c !== "undefined") {
//     return a + b + c;
//   }
//   return a + b;
// };
// console.log("🚀  addAll =>", addAll(1, 2, 3));

// ex2. default value
// const addAll2 = (a: number, b: number, c: number = 0): number => {
//   return a + b + c;
// };
// console.log("🚀  addAll2 =>", addAll2(1, 2, 7));

// TODO Rest Parameters
// const total = (a: number, ...nums: number[]): number => {
//   return a + nums.reduce((pre, cur) => pre + cur);
// };
// console.log("🚀  total =>", total(90, 1, 2, 3, 4));

// TODO NEVER Type
// EX1
// const createError = (errMsg: string): never => {
//   throw new Error(errMsg);
// };
// createError("Something went wrong!");

// EX2
// const infLoop = (): never => {
//   let i: number = 0;
//   while (true) {
//     i++;
//     if (i > 10) break;
//   }
// };

// EX3
const num = (value: number | string): string => {
  if (typeof value === "string") {
    return "string";
  }
  if (typeof value === "number") {
    return "number";
  }
  return value;
};

const num2 = (value: number | string): number => {
  if (typeof value === "string") {
    return parseInt(value);
  }
  return value;
};

const isNumber = (value: any): boolean => {
  return typeof value === "number";
};
console.log("🚀  isNumber =>", isNumber("1"));
