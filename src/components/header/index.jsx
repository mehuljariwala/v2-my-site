import { MenuIcon, Pane, Popover } from "evergreen-ui";
import "./header.scss";

const Header = () => {
  const renderLink = () => {
    return (
      <ul className="header-links">
        <li>
          <a
            href="mailto:mjariwala98@gmail.com"
            target="_blank"
            download
            rel="noreferrer"
          >
            CONTACT
          </a>
        </li>
        <li>
          <a
            href="/5_Year_Mehul-Jariwala-Resume.pdf"
            target="_blank"
            download
            rel="noreferrer"
          >
            RESUME
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mehuljariwala"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mehul-jariwala-352a01132/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/mehuljariwala/the-secrets-to-creating-react-context-api-with-custom-hook-dni"
            target="_blank"
            rel="noreferrer"
          >
            BLOGS
          </a>
        </li>
      </ul>
    );
  };

  return (
    <nav className="nav-bar">
      <div className="nav-container container">
        <div className="logo"></div>
        <div className="desktop-menu">{renderLink()}</div>
        <div className="mobile-menu">
          <Popover content={<Pane>{renderLink()}</Pane>}>
            <MenuIcon />
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Header;
