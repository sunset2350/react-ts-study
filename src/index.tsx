import * as React from "react";

import { createRoot } from "react-dom/client";
import App from "./App";

// React DOM 엘리먼트 리액트 컴포넌트를 삽입하는 코드가 한 번은 존재
// React 컴포넌트를 삽입할 위치를 지정
const root = createRoot(document.getElementById("root"));
root.render(<App />);
