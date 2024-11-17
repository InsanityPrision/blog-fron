import { NavLink } from "react-router-dom";
import "./NavigationMenu.css";

const NavigationMenu: React.FC = () => {
  return (
    <nav>
      <ul className="navigation-menu">
        <li className="navigation-menu__links">
          <NavLink to="/blog" className="navigation-menu__link">
            Blog
          </NavLink>
        </li>
        <li className="navigation-menu__links">
          <NavLink to="/add-post" className="navigation-menu__link">
            Add post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
