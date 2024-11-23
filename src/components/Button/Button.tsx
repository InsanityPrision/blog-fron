interface ButtonProps {
  type: "submit" | "reset" | "button";
  className: string;
  disabled: boolean;
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  type,
  children,
}) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      children={children}
    />
  );
};

export default Button;
