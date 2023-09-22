import { MutableRefObject, useRef } from "react";

const ProfileEdit = () => {
  const nicknameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;

  return (
    <div>
      <input ref={nicknameRef} />
      <input ref={emailRef} />
      <button>save</button>
    </div>
  );
};

export default ProfileEdit;
