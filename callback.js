"use strict";

// 동기와 비동기
// 나중에 실행되는 코드(즉, 나중에 실행되는 함수)
// Javascript is synchronous : 자바스크립트는 동기적인 아이다.
// 호이스팅이 된 이후에 우리가 작성한 코드가 나타나는 순서에 맞춰서 하나씩 동기적으로 실행된다.
// 호이스팅이란? var변수, 함수선언들이 자동적으로 제일 위로 올라가는 것
// 콜백 지옥 ....은 지양해라 !

// ⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️
console.log("1");
setTimeout(
  () => console.log("2") /* Arror function 지향 */,
  2000
); /*  ----> 비동기적 asynchronous */ /* 지금 당장 실행하진 않고 나중에 2초가 지난 다음에 내 함수를 실행해줘 즉 콜해줘 콜백~ 콜백함수 */
console.log("3");

// 자바스크립트 엔진은 위에서부터 아래로 코드를 실행한다.
// ⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️
// 그럼 콜백은 항상 비동기일때만 쓰이는가? 아니다!

// 즉각적으로 동기적으로 실행하는  < Synchronous Callback >
const printImmediately = (print) => {
  print();
};
printImmediate(() => console.log("hello "));
// --> 자바스크립트은 호이스팅 한다했으니깐, line20번부터 22번이 line 맨 위로 올라가면서 1,3,hello가 찍히고 셋타임 API가 2초 뒤에 2를 찍는다.

// 나중에 언제 실행할지 예측할 수 없는 < Asynchronous Callback >
function prtintWithDelay(print, timeous) {
  setTimeout(print, timeout);
}
prtintWithDelay(() => console.log("async callback"), 2000);

// ⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️

// 종합적으로 !! 호스팅 이후에 자바스크립트가 읽어 내려가는 모습이 이렇다.

const printImmediately = (print) => {
  print();
};

function prtintWithDelay(print, timeous) {
  setTimeout(print, timeout);
}

console.log("1");
setTimeout(() => console.log("2"), 2000);
console.log("3");
printImmediate(() => console.log("hello "));
prtintWithDelay(() => console.log("async callback"), 2000);

// < 자바스크릅트에서 함수는 일급객체. >
// 1.다른 함수의 인자로 넘길 수 있어
// 2.함수의 리턴값으로 함수를 쓸 수 있어
// 3.변수에 함수를 넣을 수도 있어

const fakeSetTime = (callback, delay) => {
  callback();
};

fakeSetTime(() => console.log("헬로우"), 0);
