import useSWR from "swr";

export interface ProfileData {
  nickname: string;
  email: string;
}

// 함수를 실행했을 때, 함수를 내보내는 함수이다.?
export function useProfileData() {
  //  const {데이터, 테이터변경함수}
  // = useSWR<데이터형식>("데이터키", 데이터조회함수(fetcher),옵션) --> 데이터 키만 필수
  const { data: ProfileData, mutate: mutateProfileData } = useSWR<ProfileData>(
    "@data/profile",
    {
      // 초기값(데이터조회함수를 통해서 최초에 받아오기전에 반환할 값)
      fallbackData: {
        nickname: "Alice",
        email: "",
      },
    }
  );

  return { ProfileData, mutateProfileData };
}
