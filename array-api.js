
π λ°°μ΄μ λ¬Έμμ΄λ‘ ... <join>
const fruits = ["apple", "banana", "grape"];
const result = fruits.join(",");

console.log(result);

π λ¬Έμμ΄μ λ°°μ΄λ‘ ... <split>
const fruits = "apple,banana,kiwi,peach";
const result = fruits.split(",", 2);
console.log(result);

π λ°°μ΄μ μμ΄ν μμλ₯Ό λ€μ§λ ... <reverse>
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = array.reverse();
console.log(result);

π λ°°μ΄μ λλ²μ§ΈκΉμ§μ μλ¦¬λ¨ΌνΈλ₯Ό μ κ±°νκ³  μλ‘μ΄ λ°°μ΄μ λ§λλ ...
const array = [1, 2, 3, 4, 5];
splice
const result = array.splice(0, 2);
console.log(result);
console.log(array);
slice
const result = array.slice(2, 5);
console.log(result);
π π π π π π π π π π π π π π π π π π π π π π π π
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];
π π π π π π π π π π π π π π π π π π π π π π π π π
π 90μ μΈ νμμ μ°ΎμΌ ... <find>
const result = students.find((student) => student.score == 90);
console.log(result);

π νμλ€ μ€ μμμ νμλ§ μ°Ύμμ λ°°μ΄λ‘ μΆλ ₯νλ ... <filter>
const result = students.filter((student) => student.enrolled);
console.log(result);

//π μ μλ§ λ½μλΈ λ°°μ΄λ‘ λ§λλ ... <map>
const result = students.map((student) => student.score);
console.log(result);
β λ°°μ΄ μμ λ€μ΄μλ λͺ¨λ  μμλ€μ μ°λ¦¬κ° μ λ¬ν΄μ€ μ½λ°±ν¨μλ₯Ό νΈμΆνλ©΄μ μ½λ°±ν¨μμ μν΄ κ°κ³΅λμ΄μ§ κ°λ€λ‘ λμ²΄νλ κ²
  μ½λ°±ν¨μλ‘ μ λ¬λλ μΈμλ (student)μ μλͺμ λ¨λ€μ΄ μ΄ν΄νκΈ° μ½κ² μ§μ κ²

π νμλ€ μ€μμ 50μ λ³΄λ€ λ?μ μ μκ° μλμ§ μλμ§ ... <some>
const result = students.some((student) => student.score < 50);
console.log(result);
μ½λ°±ν¨μκ° λ¦¬ν΄μ΄ νλλΌλ trueκ° λλμ§ μλλμ§
+ λ°°μ΄μ λͺ¨λ  μμκ° trueμΌ κ²½μ°λ₯Ό λ½μλ΄κ³  μΆλ€λ©΄, every

π νμλ€μ νκ·  μ μ  ...  <reduce> : μ°λ¦¬κ° μνλ μμμ λΆν° λ°°μ΄μ λλ©΄μ μ΄λ€ κ°μ λμ ν  λ μ¬μ©
const result = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result / students.length);

π νμλ€μ λͺ¨λ  μ μλ₯Ό λ¬Έμμ΄λ‘  ... <map + filter + join>

const result = students.map((student) => student.score).join();
console.log(result);
+ λͺ¨λ  μ μλ€ μ€μμ 50μ  μ΄μλ§ μ°Ύκ³  μΆλ€λ©΄ ...
const result = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();
console.log(result);

π νμλ€ μ μ μ€ λ?μ μ μλΆν° λ¬Έμμ΄λ‘ ... <sort>
const result = students.map((student) => student.score).sort((a, b) => a - b);
console.log(result);
