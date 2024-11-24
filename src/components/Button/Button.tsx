interface ButtonProps {
  type: "submit" | "reset" | "button";
  className: string;
  disabled: boolean;
  children: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  type,
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      children={children}
      onClick={onClick}
    />
  );
};

export default Button;
