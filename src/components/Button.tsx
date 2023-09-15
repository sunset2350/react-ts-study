interface ButtonProps {
  label: String;
  color?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({ label, color = "primary", onClick }: ButtonProps) => {
  const buttonStyle: React.CSSProperties =
    color === "primary"
      ? { backgroundColor: "blue", color: "white" }
      : { backgroundColor: "gray", color: "" };

  const handleClick = (e: React.MouseEvent) => {
    // // html mouse event
    // e.nativeEvent;

    // 속성(props)으로 넘어온 함수가 있으면 함수를 호출
    onClick && onClick();
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
