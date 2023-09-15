interface WelcomeMessagePros {
  name?: String;
}
// 리액트에서 컴포넌트 함수인데,
// JSX.Element를 반환하는 함수

// React 컴포넌트는 매개변수를 객체로 받아야함
const WelcomeMessage = ({ name = "ChatGPT" }: WelcomeMessagePros) => {
  // const name = "ChatGPT";

  // <></> : Fragment
  // JSX : js 가상DOM 객체, HTML 스타일로 작성
  // <></> : JSX Element

  // 컴포넌트에서 부모엘리먼트는 1개만 존재
  // return <></>;
  return (
    <div>
      {/* 바인딩(bind) : 데이터(변수값)을 템플릿에 출력 */}
      {/* 리액트는 단방향 바인딩만 지원 code > template */}
      {/* jsx의 자바스크립트 표현식 = {value}  */}
      <h1 style={{ color: "green" }}>Welcome,{name}!</h1>
      <p>This is an example of JSX in React.</p>
    </div>
  );
};

export default WelcomeMessage;
