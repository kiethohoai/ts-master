function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const n1 = 5;
const n2 = 2.8;
const showResult = true;
const phrase = "Result is: ";

const finalResult = add(n1, n2, showResult, phrase);
