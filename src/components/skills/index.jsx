import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <div className="title">The Skills</div>
      <div className="box-container">
        <div className="box">
          <span className="heading">
            - I am a Mehul Jariwala, full stack developer with{" "}
            <underline>
              <b>5+ years</b>
            </underline>{" "}
            of extensive programming experience.
          </span>{" "}
          <span>
            - I work quickly and quality is my top priority. I ask many
            questions so that I fully understand your business needs.
          </span>{" "}
          <span>- It may help me to finish your work with satisfaction.</span>
          <span className="list">My main expert skills are following:</span>
          <div className="skill-container">
            <div className="skill">
              JavaScript, Typescript, HTML, CSS, SCSS, JSON, Tailwind CSS
            </div>
            <div className="skill">Angular, RXJS</div>
            <div className="skill">
              React.js, React Redux, React Hook, Ionic, React Native
            </div>
            <div className="skill">Java & Java Spring</div>
            <div className="skill">Nuxt.js, Firebase</div>
            <div className="skill">Node.js, Express, Koa.js, Nest.js</div>
            <div className="skill">
              MySQL, MongoDB, Google Firebase, Redis, Elastic Search
            </div>
            <div className="skill">Github, Bitbucket, Jira, AWS, Docker</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
