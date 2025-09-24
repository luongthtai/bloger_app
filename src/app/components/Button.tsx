type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  padding?: "large" | "small";
  rounded?: "large" | "small";
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className, type = "button", padding = "large", rounded = "large", onClick }: ButtonProps) => {
  return <button className={`${className} cursor-pointer ${padding === "large" ? "p-16" : "p-8"} ${rounded === "large" ? "rounded-30" : "rounded-4"}`} type={type} onClick={onClick}>{children}</button>
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