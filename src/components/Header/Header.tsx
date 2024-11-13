import NavigationMenu from "../NavigationMenu/NavigationMenu";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="main-header__container">
        <h1 className="main-title">Blog</h1>
        <NavigationMenu />
      </div>
    </header>
  );
};

export default Header;
