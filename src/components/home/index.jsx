import CoderIcon from "../../icons/Coder";
import Skills from "../skills";
import "./home.scss";

import IconList from "../icon-list";

const Home = () => {
  return (
    <div className="container home">
      <div className="home-container">
        <div className="flex">
          <div>
            <div className="header-name">Hi, I am Mehul Jariwala</div>
            <h1 className="write-code">
              i write code <span className="blinking">_</span>
            </h1>
            <p className="icon-list">
              <IconList />
            </p>
          </div>
        </div>
        <div className="svg-container">
          <CoderIcon />
        </div>
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
};

export default Home;
