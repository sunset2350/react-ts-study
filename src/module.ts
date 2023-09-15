// js : es-module : 방법에서 모듈을 내보내는 방법
// 내보내고 싶은 모듈앞에 export를 사용
// 모듈 : 코드 집합, 변수, 함수, 객체, 클래스, 인터페이스...

// export(수출) : 내보내기
// 매개변수? : 타입 - 옵셔널
// 매개변수 : 타입 = default 값
// 매개변수 : 값1 | 값2 | 값3 -> 유니온 타입
// export function greet(name : String, age? : number) {
export function greet(
  name : String,
  gendor? : "unspecified" | "female" | "male",
  age? : number,
  nation : String = "Korea",
  ) {

  return `Hello, ${name}!`;
}


interface User extends Person {
  nickname? : String;
  printInfo? : () => void // 함수
}



export const appName = "myapp";

// 인터페이스 : 객체 구조를 선언 
interface Person {
  name : String,
  gendor? : "unspecified" | "female" | "male",
  age : number;
}

// export const user = {
//   name: "Alice",
//   age : 30,
// }

export const user : User = {
  // Person 인터페이스 속성(property)
  name : "Alice",
  age : 32,
  gendor : "male",
  // User 인터페이스 필드
  nickname : "Jane",
  printInfo : () => {
    return alert("hello")
  }
}

function identity<T>(arg : T) : T {
  return arg;
}

// 제네릭(제너릭)(generic) : 타입을 매개변수로 사용
const result = identity<String>(user.name);
const result2 = identity(user.age)
const result3 = identity<Person>(user)

console.log(result)
console.log(result2)
console.log(result3)

// 속성 추가가 안됨
// user.contry = "Korea"
// 기본 모듈 내보내기
export default {
  version: '1.0',
  creator: 'GangChan Park'
};

// module.export = {
//   greet,
//   appName,
// }