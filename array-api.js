
🛑 배열을 문자열로 ... <join>
const fruits = ["apple", "banana", "grape"];
const result = fruits.join(",");

console.log(result);

🛑 문자열을 배열로 ... <split>
const fruits = "apple,banana,kiwi,peach";
const result = fruits.split(",", 2);
console.log(result);

🛑 배열의 아이템 순서를 뒤집는 ... <reverse>
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = array.reverse();
console.log(result);

🛑 배열의 두번째까지의 엘리먼트를 제거하고 새로운 배열을 만드는 ...
const array = [1, 2, 3, 4, 5];
splice
const result = array.splice(0, 2);
console.log(result);
console.log(array);
slice
const result = array.slice(2, 5);
console.log(result);
🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑
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
🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑 🛑
🛑 90점인 학생을 찾으 ... <find>
const result = students.find((student) => student.score == 90);
console.log(result);

🛑 학생들 중 수업을 학생만 찾아서 배열로 출력하는 ... <filter>
const result = students.filter((student) => student.enrolled);
console.log(result);

//🛑 점수만 뽑아낸 배열로 만드는 ... <map>
const result = students.map((student) => student.score);
console.log(result);
✅ 배열 안에 들어있는 모든 요소들을 우리가 전달해준 콜백함수를 호출하면서 콜백함수에 의해 가공되어진 값들로 대체하는 것
  콜백함수로 전달되는 인자는 (student)의 작명은 남들이 이해하기 쉽게 지을 것

🛑 학생들 중에서 50점보다 낮은 점수가 있는지 없는지 ... <some>
const result = students.some((student) => student.score < 50);
console.log(result);
콜백함수가 리턴이 하나라도 true가 되는지 안되는지
+ 배열의 모든 요소가 true일 경우를 뽑아내고 싶다면, every

🛑 학생들의 평균 점수  ...  <reduce> : 우리가 원하는 시작점부터 배열을 돌면서 어떤 값을 누적할 떄 사용
const result = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result / students.length);

🛑 학생들의 모든 점수를 문자열로  ... <map + filter + join>

const result = students.map((student) => student.score).join();
console.log(result);
+ 모든 점수들 중에서 50점 이상만 찾고 싶다면 ...
const result = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();
console.log(result);

🛑 학생들 점수 중 낮은 점수부터 문자열로 ... <sort>
const result = students.map((student) => student.score).sort((a, b) => a - b);
console.log(result);
