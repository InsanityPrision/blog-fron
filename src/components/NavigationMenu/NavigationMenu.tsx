import "./NavigationMenu.css";

interface NavigationMenuProps {
  title: string;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ title }) => {
  return (
    <ul className="navigation-menu">
      <li className="navigation-menu__links">
        <a
          href="index.html"
          className={`navigation-menu__link ${
            title === "Blog" ? "navigation-menu__link--active" : ""
          }`}
        >
          Blog
        </a>
      </li>
      <li className="navigation-menu__links">
        <a
          href=""
          className={`navigation-menu__link ${
            title === "Add post" ? "navigation-menu__link--active" : ""
          }`}
        >
          Add post
        </a>
      </li>
    </ul>
  );
};

export default NavigationMenu;
