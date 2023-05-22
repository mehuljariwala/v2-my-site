import CoderIcon from "../../icons/Coder";
import Skills from "../skills";
import "./home.scss";

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
            <p className="style3">
              full stack developer with 8+ years of extensive programming
              experience.
              <br /> I work quickly and quality is my top priority. <br /> I ask
              many questions so that I fully understand your business needs. It
              may help me to finish your work with satisfaction.
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
