interface ButtonProps {
  type?: "submit" | "reset";
  text: string;
}

const Button: React.FC<ButtonProps> = ({ type, text }) => {
  return <button type={type} className="button" children={text} disabled />;
};

export default Button;
