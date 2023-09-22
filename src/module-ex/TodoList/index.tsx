import { LegacyRef, MutableRefObject, useRef, useState } from "react";

const TodoList = () => {
  interface Create {
    title: string;
    content: string;
  }

  const [createList, setcreateList] = useState<Create[]>([]);
  const inputTitle = useRef() as MutableRefObject<HTMLInputElement>;
  const inputcontent = useRef<string>;

  const ClickCreate = () => {
    console.log(`${inputTitle}`);
    console.log(`${inputcontent}`);
  };
  const ClickCancel = () => {};
  return (
    <>
      <div>
        <h3>게시글 작성</h3>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          ref={inputTitle}
        ></input>
        <br></br>
        <textarea
          style={{ width: "30vw", height: "30vw" }}
          ref={inputcontent}
        ></textarea>
      </div>
      <div style={{ display: "flex", textAlign: "center", gap: "20vw" }}>
        <button onClick={ClickCreate}> 등록</button>
        <button onClick={ClickCancel}> 취소</button>
      </div>
    </>
  );
};

export default TodoList;
