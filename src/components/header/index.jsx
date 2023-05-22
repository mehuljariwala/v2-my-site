import "./header.scss";

const Header = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="container nav-container">
          <div className="logo"></div>
          <div>
            <ul className="links">
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
                {" "}
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
          </div>
        </div>
      </nav>

      {/* <Dialog
        isShown={isShown}
        title="Contact me"
        confirmLabel="Send"
        onCloseComplete={() => setIsShown(false)}
        width={600}
      >
        <TextInputField label="Name" placeholder="Enter name" />
        <TextInputField label="Email" placeholder="Enter email address" />
        <Label htmlFor="textarea-2" marginBottom={4} display="block">
          Message
        </Label>
        <Textarea />
      </Dialog> */}
    </>
  );
};

export default Header;
