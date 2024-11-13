import NavigationMenu from "../NavigationMenu/NavigationMenu";
import "./Header.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="main-header">
      <div className="main-header__container">
        <h1 className="main-title">{title}</h1>
        <NavigationMenu title={title} />
      </div>
    </header>
  );
};

export default Header;
