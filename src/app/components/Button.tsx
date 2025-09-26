import { CSSProperties } from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  padding?: "large" | "small";
  rounded?: "large" | "small";
  className?: string;
  style?: CSSProperties
  onClick?: () => void;
};

const Button = ({ children, className, type = "button", padding = "large", rounded = "large", onClick, style }: ButtonProps) => {
  return <button className={`${className} cursor-pointer ${padding === "large" ? "p-16" : "p-8"} ${rounded === "large" ? "rounded-30" : "rounded-4"}`} style={style} type={type} onClick={onClick}>{children}</button>
};

// =============== Primary Button ===============
export const PrimaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      className={`bg-blue font-semibold text-white ${props.className}`}
    >
      {props.children}
    </Button>
  );
};

// =============== Secondary Button ===============
export const SecondaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} className={`bg-black10 font-semibold text-white ${props.className}`}>
      {props.children}
    </Button>
  );
};

// =============== Secondary Button ===============
export const TertiaryButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} style={{ background: 'linear-gradient(135deg, rgb(0, 85, 255), rgb(0, 153, 255))' }} className={`font-semibold text-white ${props.className}`}>
      {props.children}
    </Button>
  );
};