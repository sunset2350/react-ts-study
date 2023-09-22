import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  ProfileData,
  useProfileData,
} from "./modules/Profile/ProfileView/data";

// 타입을 마지막에 넣을 떄(추가) 사용
// function Layout() {
//   const { nickname, email } = {
//     nickname: "Alice",
//     email: "alice@gmail.com",
//   } as ProfileData;

function Layout() {
  // swr 데이터 -> 상태값
  // 데이터가 변경되면 컴포넌트가 다시 렌더링된다.
  const { ProfileData, mutateProfileData } = useProfileData();
  console.log(ProfileData);

  return (
    <div>
      <header>
        <em>{ProfileData.nickname}</em>
      </header>
      {/* 링크들이 있는 네비게이션 위치 */}
      <nav>
        <ul style={{ display: "flex", gap: "40px" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* 페이지 이동 */}
            {/* url에 맞는 컴포넌트로만 로딩(a herf는 안좋음) */}
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      {/* 세부 화면들이 나오는 곳 */}
      <main>
        {/* 세부경로의 컴포넌트들이 로딩위치 */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
export default Layout;
