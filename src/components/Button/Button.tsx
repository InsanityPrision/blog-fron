import { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  type,
  className,
  children,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={className}
      children={children}
      disabled={disabled}
    />
  );
};

export default Button;
