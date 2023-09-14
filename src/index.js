// ecmascript(es,js)
// const person = {username : "Alice", age:30}
// person.username
// person.age

import { appName, greet,user } from "./module.js";
// 디폴트 모듈
// 자동완성으로 파일명하고 모듈명을 동일하게 해줌
// import module from ".module";
import metadata from "./module.js";

// const module = require("./module")
// module.appName



const name = "Javascript";
console.log(
  greet(`${name}-${appName}
  -${metadata.version}-${metadata.creator}
  -${user.name}-${user.age}`.trim())
  );