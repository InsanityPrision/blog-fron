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
          className={`links__link ${
            title === "Blog" ? "links__link--active" : ""
          }`}
        >
          Blog
        </a>
      </li>
      <li className="navigation-menu__links">
        <a
          href=""
          className={`links__link ${
            title === "Add post" ? "links__link--active" : ""
          }`}
        >
          Add post
        </a>
      </li>
    </ul>
  );
};

export default NavigationMenu;
